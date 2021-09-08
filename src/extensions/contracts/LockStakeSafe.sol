pragma ton-solidity >= 0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "./interfaces/IDePool.sol";
import "./interfaces/IParticipant.sol";
import "./interfaces/ILockStakeSafe.sol";

contract LockStakeSafe is IParticipant, ILockStakeSafe {

  address public static depoolAddress;
  address public static nftKeyAddress;
  uint128 public static depoolFee;
  uint128 public static depoolMinStake;
  uint256 public static salt;

  mapping(uint256 => uint128) public stakeList;
  uint128 public stakeTotal;

  uint128 public depoolStakeReturn;

  uint128 public withdrawTotal;

  struct OnRoundComplete {
    uint128 msgValue;
    uint64 roundId;
    uint64 reward;
    uint64 ordinaryStake;
    uint64 vestingStake;
    uint64 lockStake;
    bool reinvest;
    uint8 reason;
  }

  struct ReceiveAnswer {
    uint32 errcode;
    uint64 comment;
    uint128 msgValue;
  }

  struct OnTransfer {
    address source;
    uint128 amount;
  }

  mapping(uint256 => OnRoundComplete) public onRoundCompleteList;
  mapping(uint256 => ReceiveAnswer) public receiveAnswerList;
  mapping(uint256 => OnTransfer) public onTransferList;

  uint128 public constant SET_DONOR_GRAMM = 1 ton;
  uint128 public constant MIN_BALANCE = 1 ton;


  modifier onlyNftKey {
    require(msg.sender == nftKeyAddress, 102);
    _;
  }

  modifier onlyDepool {
    require(msg.sender == depoolAddress, 103);
    _;
  }

  constructor(uint32 periodLockStake) public {
    require(msg.value >= (depoolMinStake + depoolFee) * 3 + SET_DONOR_GRAMM + MIN_BALANCE && periodLockStake > 0 && periodLockStake < 18 * (365 days), 104);
    tvm.accept();
    addOrdinaryStake(depoolMinStake);
    setLockStakeDonor(SET_DONOR_GRAMM);
    uint128 amountLockStake = msg.value - depoolMinStake - depoolFee - SET_DONOR_GRAMM - MIN_BALANCE;
    addLockStake(amountLockStake, periodLockStake);
  }

  function addOrdinaryStake(uint128 amount) private inline {
    stakeList[uint256(now)] = amount;
    stakeTotal += amount;
    IDePool(depoolAddress).addOrdinaryStake{value: amount + depoolFee, flag: 1}(uint64(amount));
  }

  function setLockStakeDonor(uint128 grams) private inline {
    IDePool(depoolAddress).setLockDonor{value: grams, flag: 0}(address(this));
  }

  function addLockStake(uint128 amount, uint32 period) private inline {
    stakeList[uint256(now)] = amount;
    stakeTotal += amount;
    IDePool(depoolAddress).addLockStake{value: amount + depoolFee, flag: 1}(uint64(amount),address(this),period,period);
  }

  function withdrawDePoolPart(uint128 amount)  public override onlyNftKey {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    TvmCell body = tvm.encodeBody(IDePool(depoolAddress).withdrawPart,uint64(amount));
    depoolAddress.transfer({value: 0, flag: 128, bounce:true, body:body});
  }

  function withdrawDePoolAll()  public override onlyNftKey {
    tvm.rawReserve(address(this).balance - msg.value, 2);
    TvmCell body = tvm.encodeBody(IDePool(depoolAddress).withdrawAll);
    depoolAddress.transfer({value: 0, flag: 128, bounce:true, body:body});
  }

  function withdrawLockStakeSafePart(address destination, uint128 amount)  public override onlyNftKey {
    require(amount <= address(this).balance, 105);
    tvm.accept();
    withdrawTotal += amount;
    destination.transfer({value: amount, flag: 0, bounce:true});
  }

  function withdrawLockStakeSafeAll(address destination)  public override onlyNftKey {
    tvm.accept();
    withdrawTotal += address(this).balance;
    destination.transfer({value: 0, flag: 128, bounce:true});
  }

  function onRoundComplete(
    uint64 roundId,
    uint64 reward,
    uint64 ordinaryStake,
    uint64 vestingStake,
    uint64 lockStake,
    bool reinvest,
    uint8 reason) external override onlyDepool {
      tvm.accept();
      uint256 ts = uint256(now);
      OnRoundComplete corc = onRoundCompleteList[ts];
      corc.msgValue = msg.value;
      corc.roundId = roundId;
      corc.reward = reward;
      corc.ordinaryStake = ordinaryStake;
      corc.vestingStake = vestingStake;
      corc.lockStake = lockStake;
      corc.reinvest = reinvest;
      corc.reason = reason;
      onRoundCompleteList[ts] = corc;
      depoolStakeReturn += msg.value;
    }

    function receiveAnswer(uint32 errcode, uint64 comment) external override onlyDepool {
      tvm.accept();
      uint256 ts = uint256(now);
      ReceiveAnswer cra = receiveAnswerList[ts];
      cra.errcode = errcode;
      cra.comment = comment;
      cra.msgValue = msg.value;
      receiveAnswerList[ts] = cra;
    }

    function onTransfer(address source, uint128 amount) external override onlyDepool {
      tvm.accept();
      uint256 ts = uint256(now);
      OnTransfer cot = onTransferList[ts];
      cot.source = source;
      cot.amount = amount;
      onTransferList[ts] = cot;
    }

    receive() external{
    }

  }

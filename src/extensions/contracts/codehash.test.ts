import { TonClient } from "@tonclient/core";
import { createClient } from "@ton-contracts/utils/client";
import TonContract from "@ton-contracts/utils/ton-contract";
import { callThroughMultisig } from "@ton-contracts/utils/net";
import pkgSafeMultisigWallet from "../ton-packages/SetCodeMultisig.package"
import pkgNftRoot from "../ton-packages/NftRoot.package";
import pkgData from "../ton-packages/Data.package";
import pkgIndex from "../ton-packages/Index.package";
import pkgLockStakeSafe from "../ton-packages/LockStakeSafe.package";

import { expect } from "chai";

const hex = require('ascii-hex');


function toHex(input) {
  let output = '';
  for (let i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

function encodeText(text) {
  return Buffer.from(text).toString("hex");
}


describe("codehash test", () => {
  let client: TonClient;
  let smcSafeMultisigWallet: TonContract;
  let smcNftRoot: TonContract;
  let smcNftRoot2: TonContract;
  let smcNft: TonContract;
  let smcData: TonContract;
  let myDeployedNft = 0;
  let myNftRootAll = 0;
  let zeroAddress = '0:0000000000000000000000000000000000000000000000000000000000000000';
  let fakeAddress = "0:0000000000000000000000000000000000000000000000000000000000001111";

  before(async () => {
    client = createClient();
    const keys = {
      public: '87a073e5e05e9fc1d2911c923948aa8d656ee54d47d75171c776594531ded1df',
      secret: 'c4e7f73cd081977cd7dbff49aa7da4c0788c339aa48ef6bf8e1fc36462575b49',
    };
    smcSafeMultisigWallet = new TonContract({
      client,
      name: "SafeMultisigWallet",
      tonPackage: pkgSafeMultisigWallet,
      address: '0:b6ad8175fd6870e93fe44908c01831269065f8890ad119c5917bad088e192c43',
      keys: keys,
    });
  });



  it("search NFT keys by codehash", async () => {

    console.log('SurfWallet address', smcSafeMultisigWallet.address);

    const surfWalletBal = (
      await client.net.query_collection({
        collection: "accounts",
        filter: {
          id: { eq: smcSafeMultisigWallet.address },
        },
        result: "balance",
      })
    ).result[0];

    console.log('SurfWallet balance ', parseInt(surfWalletBal.balance));

    const rootAddr = '0:100f9cc998c35a8046ce6bc0076bc64a0502fe195771d5d380a80381bb91ffa2';
    console.log('nftRoot address', rootAddr);

    smcNftRoot = new TonContract({
      client,
      name: "NftRoot",
      tonPackage: pkgNftRoot,
      address: rootAddr,
    });

    const nftRootBal = (
      await client.net.query_collection({
        collection: "accounts",
        filter: {
          id: { eq: smcNftRoot.address },
        },
        result: "balance",
      })
    ).result[0];

    console.log('NftRoot balance ', parseInt(nftRootBal.balance));

    const { codeHashData } = (
      await smcNftRoot.run({
        functionName: "resolveCodeHashData",
        input: {},
      })
    ).value;

    console.log('resolveCodeHashData from nftRoot', codeHashData);

    const Datas = (
      await client.net.query_collection({
        collection: "accounts",
        filter: {
          code_hash: {eq:'5d3bb7f497f25ebf6219b497380083d9cbaa62ac549a51567e2ee4c5ea5dcc30'},
        },
        result: "id",
      })
    ).result;

    console.log('Datas ', Datas);

    const promisesA = Datas.map((el) => {
      const _smcData = new TonContract({
        client,
        name: "",
        tonPackage: pkgData,
        address: el.id,
      });
      // console.log('el.id ',  el.id);
      return _smcData.run({
        functionName: "getOwner",
      });
    });

    const resultsA = await Promise.all(promisesA);

    // console.log('results ',  resultsA);

    const promisesB = Datas.map((el) => {
      const _smcData = new TonContract({
        client,
        name: "",
        tonPackage: pkgData,
        address: el.id,
      });
      // console.log('el.id ',  el.id);
      return _smcData.run({
        functionName: "_safeLockStake",
      });
    });

    const resultsB = await Promise.all(promisesB);

    // console.log('resultsB ',  resultsB);

    let ownerNftKeyArr = [];
    let ownerLockStakeSafeArr = [];

    resultsA.forEach((el: any, i) => {
      if (el.value.addrOwner === smcSafeMultisigWallet.address) {
        ownerNftKeyArr.push(Datas[i].id);
        ownerLockStakeSafeArr.push(resultsB[i].value._safeLockStake);


      }
    });
    console.log('owner Surf Wallet ',  smcSafeMultisigWallet.address);
    console.log('owner NftKeyArr ',  ownerNftKeyArr);
    console.log('owner LockStakeSafeArr ',  ownerLockStakeSafeArr);

    expect(1).to.be.equal(1);
  });




  // it("deploy NftKeySafe root", async () => {
  //
  //   let responce;
  //   const depoolAddress = '0:268864dfa2abb35976d8ab2ccd5f359f02143bb36f2f9cdcf770f2ec1a3e2c76';
  //   console.log(`depoolAddress: ${depoolAddress}`);
  //
  //   const grams = 40_000_000_000;
  //   console.log(`grams send from SurfWallet for create NFT key, LockStakeSafe and LockStake to DePool: ${grams}`);
  //
  //   responce = await callThroughMultisig({
  //     client,
  //     smcSafeMultisigWallet,
  //     abi: pkgNftRoot.abi,
  //     functionName: "createLockStakeSafeWithNftKey",
  //     input: {
  //       _donor:smcSafeMultisigWallet.address,
  //       _depoolAddress:depoolAddress,
  //       _depoolFee:500000000,
  //       _depoolMinStake:10000000000,
  //       _periodLockStake:10800,
  //     },
  //     dest: smcNftRoot.address,
  //     value: grams,
  //   });
  //
  //   console.log('createLockStakeSafeWithNftKey ', responce);
  //
  //
  //     const { codeHashData } = (
  //       await smcNftRoot.run({
  //         functionName: "resolveCodeHashData",
  //         input: {},
  //       })
  //     ).value;
  //
  //     console.log('resolveCodeHashData from nftRoot', codeHashData);
  //
  //
  //     const Datas = (
  //         await client.net.query_collection({
  //           collection: "accounts",
  //           filter: {
  //             code_hash: {eq:codeHashData.slice(2)},
  //           },
  //           result: "id",
  //         })
  //       ).result;
  //
  //       console.log('Datas ', Datas);



  // smcData = await getAddrData(
  //   client,
  //   smcNftRoot,
  //   smcSafeMultisigWallet
  // );

  // console.log(`Data address: ${smcData.address}`);

  // const res = await smcData.run({
  //   functionName: "getInfo"
  // });
  // myDeployedNft++;
  //
  // console.log('getInfo ',res);
  //
  // expect(smcNftRoot.address).to.be.equal(res.value.addrRoot);
  // expect(process.env.MULTISIG_ADDRESS).to.be.equal(res.value.addrOwner);

  //   expect(2).to.be.equal(2);
  //
  // });

});

//   it("get my nft inside root before transfer", async () => {
//     const results = await getMyNfts(client, smcData, smcNftRoot.address);
//     expect(1).to.be.equal(results.length);
//   });
//
//   it("get myAll nft", async () => {
//     // At this point, the test may break
//     const results = await getMyNfts(client, smcData, zeroAddress);
//     myNftRootAll = results.length;
//     expect(myDeployedNft).to.be.equal(results.length);
//   });
//
//   it("transfer ownership", async () => {
//     await callThroughMultisig({
//       client,
//       smcSafeMultisigWallet,
//       abi: pkgData.abi,
//       functionName: "transferOwnership",
//       input: {
//         addrTo:fakeAddress
//       },
//       dest: smcData.address,
//       value: 1_000_000_000,
//     });
//
//     const res = await smcData.run({
//       functionName: "getOwner",
//     });
//
//     expect(fakeAddress).to.be.equal(res.value.addrOwner);
//   });
//
//   it("get my nft inside root after transfer", async () => {
//     const results = await getMyNfts(client, smcData, smcNftRoot.address);
//     expect(0).to.be.equal(results.length);
//   });
//
//   it("get myAll nft after transfer", async () => {
//     const results = await getMyNfts(client, smcData, zeroAddress);
//     expect(myNftRootAll-1).to.be.equal(results.length);
//   });
// });

// const getAddrData = async (
//   client: TonClient,
//   smcNftRoot: TonContract,
//   smcSafeMultisigWallet: TonContract
// ): Promise<TonContract> => {
//   let smcData: TonContract;
//
//   // const { codeHashData } = (
//   //   await smcNftRoot.run({
//   //     functionName: "resolveCodeHashData",
//   //     input: {},
//   //   })
//   // ).value;
//
//   const codeHashData  = await smcNftRoot.run({
//     functionName: "resolveCodeHashData",
//     input: {},
//   });
//
//   console.log('codeHashData', codeHashData);
//
//   let ch1 = (codeHashData.value.codeHashData).toString();
//   ch1 = ch1.slice(2);
//   console.log('codeHashData1', ch1);
//   // let ch2 = ch1.toString(16);
//   // console.log('codeHashData2', ch2);
//
//
//
//
//
//   // codeHashData.slice(2);
//   // let ch = '"'+codeHashData.slice(2)+'"';
//   //
//   // console.log('codeHashData', ch);
//   //
//   // // console.log( ch.toString(16) );
//   //
//   // console.log( Buffer.from(ch,"utf8").toString("hex"));
//   // console.log( Buffer.from(ch,"ascii").toString("hex"));
//   // console.log( Buffer.from(ch,"utf8").toString("ascii"));
//   // console.log( Buffer.from(ch,"ascii").toString("utf8"));
//   // console.log( Buffer.from(ch,"utf8").toString("base64"));
//
//
//   const Datas = (
//     await client.net.query_collection({
//       collection: "accounts",
//       filter: {
//
//         code_hash: {eq: encodeText(ch1)},
//         // code_hash: {eq:'4538d9a3d43d18cd48fe05777205fc3dda1458730180dfeb1ca6c1c086fcf0bb'},
//
//       },
//       result: "id",
//     })
//   ).result;
//
//   console.log('Datas ', Datas);
//
//   const promises = Datas.map((el) => {
//     const _smcData = new TonContract({
//       client,
//       name: "",
//       tonPackage: pkgData,
//       address: el.id,
//     });
//     console.log('el.id ',  el.id);
//     return _smcData.run({
//       functionName: "getOwner",
//     });
//   });
//
//   const results = await Promise.all(promises);
//
//   console.log('results ',  results);
//
//   results.forEach((el: any, i) => {
//     if (el.value.addrOwner === smcSafeMultisigWallet.address) {
//       smcData = new TonContract({
//         client,
//         name: "Data",
//         tonPackage: pkgData,
//         address: Datas[i].id,
//       });
//     }
//   });
//
//   return smcData;
// };

// const getMyNfts = async (
//   client: TonClient,
//   smcData: TonContract,
//   rootAddr: string
// ): Promise<any> => {
//   const { codeHashIndex } = (
//     await smcData.run({
//       functionName: "resolveCodeHashIndex",
//       input: {
//         addrRoot: rootAddr,
//         addrOwner: process.env.MULTISIG_ADDRESS
//       },
//     })
//   ).value;
//
//   let nfts = [];
//   let counter = 0;
//
//   while (nfts.length === 0 && counter <= 500) {
//     const qwe = await client.net.query_collection({
//       collection: "accounts",
//       filter: {
//         code_hash: { eq: codeHashIndex.slice(2) },
//       },
//       result: "id",
//     });
//     counter++;
//     nfts = qwe.result;
//   }
//
//   const promises = nfts.map((el) => {
//     const _smcNft = new TonContract({
//       client,
//       name: "",
//       tonPackage: pkgIndex,
//       address: el.id,
//     });
//     return _smcNft.run({
//       functionName: "getInfo",
//     });
//   });
//
//   return await Promise.all(promises);
// };

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import arrowBack from '../../images/arrowBack.png';
import AssetsList from "../AssetsList/AssetsList";
import {useHistory} from "react-router-dom";
import {setReceiveToken, setTokenForReceiveSetted} from "../../store/actions/walletSeed";

const pureNFT = [{
    walletAddress: "0:e0b0495751895edc29c5e453f122f25fffebd2bf21c0a0c3d8e98a8ae7b87e3a",
    addrData: "0:f3c3e52b934e058b05627681cd6c4b36bb9748d9c947a0bafbcb1c30ddc51ddf",
    addrOwner: "0:b6ad8175fd6870e93fe44908c01831269065f8890ad119c5917bad088e192c43",
    addrRoot: "0:100f9cc998c35a8046ce6bc0076bc64a0502fe195771d5d380a80381bb91ffa2",
    balance: 1,
    depoolAddress: "0:268864dfa2abb35976d8ab2ccd5f359f02143bb36f2f9cdcf770f2ec1a3e2c76",
    depoolFee: "500000000",
    depoolMinStake: "10000000000",
    icon: "http://localhost:3005/c409d72cd528242f9218027787fafa1b.svg",
    onRoundCompleteList: {},
    onTransferList: {},
    receiveAnswerList: {0x00000000000000000000000000000000000000000000000000000000611a5510: {}},
    stakeList: {0x00000000000000000000000000000000000000000000000000000000611a54ff: "26238368000"},
    stakeTotal: "",
    symbol: "DP",
    withdrawTotal: "0",
    _safeLockStake: "0:ccd8a245a73fbeec4aa484fd3f106a6bb9c0febd66e02c14254e5cce5e44ec47",
}]

function AssetsModalReceive() {
    const history = useHistory();
    const dispatch = useDispatch();
    const assetstestArray = useSelector(state => state.walletSeedReducer.assetstestArray);
    const tokenList = useSelector(state => state.walletReducer.tokenList);

    const NFTassets = useSelector(state => state.walletSeedReducer.NFTassets);

    function handleClear() {
        dispatch(setTokenForReceiveSetted(false))
        history.push("/wallet/receive")
    }

    function handleSetToken(item) {

        // dispatch(setReceiveToken(""))
        dispatch(setReceiveToken(item))
        history.push("/wallet/receive")
    }

    return (
        <>
            {/*{showAssetsForSend &&*/}
            <div className="container">
                <div className="mainblock">
                    <div className="head_wrapper">
                        <button className="arrow_back" onClick={() => handleClear()}>
                            <img src={arrowBack} alt={"arrow"}/>
                        </button>
                    </div>
                    <AssetsList
                        handleClickToken={(item) => handleSetToken(item)}

                        handleClickNFT={(item) => handleSetToken(item)}
                        TokenAssetsArray={tokenList}
                        NFTassetsArray={pureNFT}
                        showNFTdata={false}
                    />
                </div>
            </div>
            {/*}*/}


        </>
    )
}

export default AssetsModalReceive;

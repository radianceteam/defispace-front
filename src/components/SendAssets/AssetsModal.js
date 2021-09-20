import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './SendAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import AssetsList from "../AssetsList/AssetsList";
import {useHistory} from "react-router-dom";
import TONicon from "../../images/tonCrystalDefault.svg";
import {
    setAmountForSend,
    setCurrentTokenForSend,
    setInputNFTDisabled,
    setTokenSetted
} from "../../store/actions/walletSeed";
import SearchInput from "../SearchInput/SearchInput";

function AssetsModal() {
    const history = useHistory();
    const dispatch = useDispatch();
    const NFTassets = useSelector(state => state.walletSeedReducer.NFTassets);
    const tokenList = useSelector(state => state.walletReducer.tokenList);
    const clientData = useSelector(state => state.walletReducer.clientData);

    const [tokensWithNativeTons, settokensWithNativeTons] = useState([])
    useEffect(() => {
        const TONdata = {
            walletAddress: clientData.address,
            symbol: "TON Crystal",
            tokenName: "TON Crystal",
            type: "TON Crystal",
            icon: TONicon,
            rootAddress: "none",
            balance: clientData.balance,
        }
        const withNative = JSON.parse(JSON.stringify(tokenList))
        withNative.push(TONdata)
        settokensWithNativeTons(withNative)


    }, [])

    function handleClear() {
        dispatch(setInputNFTDisabled(null))
        // dispatch(setAmountForSend(0))
        history.push("/wallet/send")
    }

    function handleSetNFT(item) {
        dispatch(setAmountForSend(""))

        dispatch(setInputNFTDisabled("disabled"))
        dispatch(setAmountForSend(item.stakeTotal))
        dispatch(setCurrentTokenForSend(item))

        dispatch(setTokenSetted(true))
        history.push("/wallet/send")
    }

    function handleSetToken(item) {
        console.log("mey otiem", item)
        dispatch(setAmountForSend(""))
        dispatch(setInputNFTDisabled(null))
        dispatch(setCurrentTokenForSend(item))
        dispatch(setTokenSetted(true))

        history.push("/wallet/send")
    }

    // const [showNFTdata, setShowNFTdata] = useState(false)
    //
    // function handleShowNFTData() {
    //     setShowNFTdata(!showNFTdata)
    //
    // }

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
                    <SearchInput func={()=>console.log("func")}/>

                    <AssetsList
                        handleClickNFT={(item) => handleSetNFT(item)}
                        handleClickToken={(item) => handleSetToken(item)}
                        TokenAssetsArray={tokensWithNativeTons}
                        NFTassetsArray={NFTassets}
                        // showNFTdata={false}
                    />
                </div>
            </div>
        </>
    )
}

export default AssetsModal;

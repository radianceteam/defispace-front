import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './SendAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import AssetsList from "../AssetsList/AssetsList";
import {useHistory} from "react-router-dom";
import {setAddressForSend, setAmountForSend, setCurrentTokenForSend} from "../../store/actions/walletSeed";

function AssetsModal() {
    const history = useHistory();
    const dispatch = useDispatch();
    const assetstestArray = useSelector(state => state.walletSeedReducer.assetstestArray);

    function handleClear() {
        history.push("/wallet/send")
    }
    function handleSetToken(item) {
        dispatch(setAmountForSend(""))
        dispatch(setCurrentTokenForSend(item))
        history.push("/wallet/send")
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
                        handleClick={(item) => handleSetToken(item)}
                        currentTokenForReceive={assetstestArray}
                    />
                </div>
            </div>
            {/*}*/}



        </>
    )
}

export default AssetsModal;

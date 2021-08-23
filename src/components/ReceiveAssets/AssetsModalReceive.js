import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import arrowBack from '../../images/arrowBack.png';
import AssetsList from "../AssetsList/AssetsList";
import {useHistory} from "react-router-dom";
import {setReceiveToken} from "../../store/actions/walletSeed";

function AssetsModalReceive() {
    const history = useHistory();
    const dispatch = useDispatch();

    function handleClear() {
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
                        handleClick={(item) => handleSetToken(item)}

                    />
                </div>
            </div>
            {/*}*/}



        </>
    )
}

export default AssetsModalReceive;

import React, {useState} from 'react';
import './ReceiveAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import copybtn from '../../images/copybtn.svg';
import {useHistory} from "react-router-dom";
import BlockItem from "../AmountBlock/AmountBlock";
import {useSelector} from "react-redux";
import TokenChanger from "../TokenChanger/TokenChanger";
import ShowBalance from "../AmountBlock/ShowBalance";
import MainBlock from "../MainBlock/MainBlock";
import {setAddressForSend} from "../../store/actions/walletSeed";


function ReceiveAssets() {
    const currentTokenForReceive = useSelector(state => state.walletSeedReducer.currentTokenForReceive);
    const tokenForReceiveSetted = useSelector(state => state.walletSeedReducer.tokenForReceiveSetted);
    function handleCutAddress(address) {
//todo add validation
        let spliced = address.slice(0, 7)
        let splicedpart2 = address.slice(59)
        let view = spliced + "..." + splicedpart2;
        console.log("addressTo", address)
return view
    }
    const history = useHistory();
    function handleBack() {
        history.push("/wallet")
    }

    function handleCopy(){
        navigator.clipboard.writeText(currentTokenForReceive.address)

    }
    return (

        <div className="container">
        <MainBlock
            smallTitle={false}
            content={
                <div>
                    <div className="head_wrapper">
                        {/*//TODO*/}
                        <button className="arrow_back" onClick={() => handleBack(false)}>
                            <img src={arrowBack} alt={"arrow"}/>
                        </button>
                        <div className="left_block">
                            Receive asset
                        </div>

                    </div>
                    <BlockItem
                        leftTitle={"Balance:"}
                        currentToken={currentTokenForReceive}
                        rightTopBlock={
                            <div className="send_balance">
                                Asset
                            </div>
                        }
                        rightBottomBlock={
                            <TokenChanger
                                enableMax={<div style={{"width": "52px"}}/>}
                            />
                        }
                        leftBlockBottom={
                            <div className="receive_balance_block">
                                <ShowBalance
                                    classWrapper={"receive_balance2"}
                                    balance={currentTokenForReceive.balance}
                                    showBal={tokenForReceiveSetted}
                                />
                            </div>}
                    />

                    <BlockItem
                        leftTitle={"Your address for this asset"}
                        currentToken={currentTokenForReceive}
                        rightTopBlock={
                            null
                        }
                        rightBottomBlock={
                            <div className="copybtn_wrapper">
                                <button className="arrow_back" onClick={() => handleCopy()}>
                                    <img src={copybtn} alt={"arrow"}/>
                                </button>
                            </div>
                        }
                        leftBlockBottom={
                            <div className="receive_balance_block">
                                <div className="receive_balance">
                                    {tokenForReceiveSetted ? handleCutAddress(currentTokenForReceive.address) : "0:..."}
                            </div>
                            </div>}
                    />



                </div>
            }
        />
            </div>




    )
}

export default ReceiveAssets;

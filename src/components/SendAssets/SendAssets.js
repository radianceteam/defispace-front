import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainBlock from '../../components/MainBlock/MainBlock';
import './SendAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import CloseIcon from '@material-ui/icons/Close';
import AssetsList from "../AssetsList/AssetsList";
import {useHistory} from "react-router-dom";
import {
    setAmountForSend,
    setAddressForSend,
    setCurrentTokenForSend,
    setShowAssetsForSend, setTokenSetted
} from '../../store/actions/walletSeed';
import InputChange from "../AmountBlock/InputChange";
import RightTopBlock from "../AmountBlock/ShowBalance";
import RightBlockBottom from "../AmountBlock/RightBlockBottom";
import BlockItem from "../AmountBlock/AmountBlock";
import MaxBtn from "../AmountBlock/MAXbtn";
import ShowBalance from "../AmountBlock/ShowBalance";

function SendAssets() {

    const dispatch = useDispatch();
    const history = useHistory();

    const addressToSend = useSelector(state => state.walletSeedReducer.addressToSend);
    const currentTokenForSend = useSelector(state => state.walletSeedReducer.currentTokenForSend);
    const showAssetsForSend = useSelector(state => state.walletSeedReducer.showAssetsForSend);
    const tokenSetted = useSelector(state => state.walletSeedReducer.tokenSetted);

    function handleChangeAddress(e) {
        dispatch(setAddressForSend(e.currentTarget.value))
    }

    function handleSetView() {
//todo add validation
        let spliced = addressToSend.slice(0, 7)
        let splicedpart2 = addressToSend.slice(59)
        let view = spliced + "..." + splicedpart2;
        console.log("addressTo", addressToSend)
        dispatch(setAddressForSend(view))
    }

    function handleClearInput() {

        dispatch(setAddressForSend(""))
    }

    function handleBack() {
        history.push("/sendAssets")
    }

    return (

        <div className="container">

            {!showAssetsForSend &&
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
                                Send asset
                            </div>

                        </div>
                        <div className="recipient_wrapper">
                            <div className="send_text_headers">
                                Recipient address
                            </div>
                            <div onBlur={() => handleSetView()}>
                                <div className="send_inputs">
                                    <input
                                        onChange={(e) => handleChangeAddress(e)}

                                        value={addressToSend}
                                        className="recipient_input"
                                        placeholder={"0:..."}
                                    />
                                    <CloseIcon
                                        style={{"cursor":"pointer"}}
                                        fontSize="large"
                                        onClick={() => handleClearInput("address")}
                                    />
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <BlockItem
                            leftTitle={"Amount"}
                            // currentToken={currentToken}
                            rightTopBlock={
                                <ShowBalance
                                    classWrapper={"send_balance"}
                                    balance={`Balance: ${currentTokenForSend.balance}`}
                                    showBal={tokenSetted}
                                />}
                            rightBottomBlock={
                                <RightBlockBottom
                                    enableMax={<MaxBtn/>}
                                />}
                            leftBlockBottom={<InputChange/>}
                        />

                        <div className="btn_wrapper">
                            <button className="btn wallet-btn">Send</button>
                        </div>
                    </div>
                }
            />
            }
        </div>

    )
}

export default SendAssets;

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainBlock from '../../components/MainBlock/MainBlock';
// import './SendAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import {useHistory} from "react-router-dom";
import {
    setAddressForSend, setAmountForSend,
    setShowWaitingSendAssetsPopup
} from '../../store/actions/walletSeed';
import InputChange from "../AmountBlock/InputChange";
import BlockItem from "../AmountBlock/AmountBlock";
import MaxBtn from "../AmountBlock/MAXbtn";
import ShowBalance from "../AmountBlock/ShowBalance";
import {sendNativeTons, sendNFT, sendToken, unWrapTons, wrapTons} from "../../extensions/sdk/run";
import WaitingPopup from "../WaitingPopup/WaitingPopup";
import {setTips} from "../../store/actions/app";
import SetTokenBlock from "../AmountBlock/SetTokenBlock";
import useKeyPair from "../../hooks/useKeyPair";

function WrapUnwrap(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const amountToSend = useSelector(state => state.walletSeedReducer.amountToSend);
    const clientData = useSelector(state => state.walletReducer.clientData);

    const [wrapConfirmIsVisible, setWrapConfirmIsVisible] = useState(false)


    function handleHideConfirmPopup() {
        setsendConfirmPopupIsVisible(false)
    }



    const { keyPair } = useKeyPair();

    async function handleConfirm() {
        if (!amountToSend) {
            dispatch(setTips(
                {
                    message: `Please set amount for ${props.confirmText}`,
                    type: "error",
                }
            ))
        }else if(amountToSend >= props.currentTokenForWrap.balance){
            dispatch(setTips(
                {
                    message: `Insufficient balance`,
                    type: "error",
                }
            ))
        }else {
            setWrapConfirmIsVisible(true)
            let res;
            if (props.transactionType === "wrap") {
                res = await wrapTons(clientData.address, keyPair, amountToSend)

            } else {
                res = await unWrapTons(clientData.address, keyPair, amountToSend)
            }

            if (!res.code) {
                dispatch(setTips(
                    {
                        message: `Sended message to blockchain`,
                        type: "info",
                    }
                ))
            } else {
                dispatch(setTips(
                    {
                        message: `Something goes wrong - error code ${res.code}`,
                        type: "error",
                    }
                ))
            }

            dispatch(setAmountForSend(0))
            dispatch(setShowWaitingSendAssetsPopup(false))
            props.handleShow(false)
            console.log("sendToken", res)
        }
    }



    function handleBack() {
        props.handleShow(false)

            dispatch(setAmountForSend(0))

    }
    function handleClose() {
        dispatch(setAmountForSend(0))
        setWrapConfirmIsVisible(false)

        // dispatch(setShowWaitingSendAssetsPopup(false))
        // props.handleShow(false)
    }

    return (

        <div className="container">

            {!wrapConfirmIsVisible &&
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
                                {props.title}
                            </div>
                        </div>

                        <BlockItem
                            leftTitle={"Amount"}
                            // currentToken={currentToken}
                            rightTopBlock={
                                <ShowBalance
                                    classWrapper={"send_balance center"}
                                    balance={props.currentTokenForWrap.balance}
                                    label={true}
                                    showBal={props.tokenSetted}
                                />}
                            rightBottomBlock={
                                <div className="send_set_token_wrap column">
                                    {/*<MaxBtn/>*/}
                                    <div style={{width:"52px"}}/>
                                    <SetTokenBlock
                                        handleTouchTokenModal={null}
                                        // img={TON}
                                        disableArrow={true}
                                        currentToken={props.currentTokenForWrap}
                                    />
                                </div>

                                }
                            leftBlockBottom={<InputChange/>}
                            // className={isInvalidAmount && "amount_wrapper_error"}
                        />
                        {/*{isInvalidAmount &&*/}
                        {/*<FormHelperText style={{marginLeft: "27px", marginTop: "4px"}} error id="component-error-text">{validationMsgForAmount}</FormHelperText>}*/}

                        <div className="btn_wrapper ">
                            <button onClick={() => handleConfirm()} className="btn mainblock-btn">Confirm {props.confirmText}
                            </button>
                        </div>
                    </div>
                }
            />
            }
            {wrapConfirmIsVisible &&
            <WaitingPopup
                text={`${props.title} ${amountToSend}`}
                handleClose={()=>handleClose()}

            />}
        </div>

    )
}

export default WrapUnwrap;

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import cls from "classnames";
import MainBlock from '../../components/MainBlock/MainBlock';
import './SendAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import CloseIcon from '@material-ui/icons/Close';
import {useHistory} from "react-router-dom";
import {FormHelperText} from "@material-ui/core"
import {
    setAddressForSend,
    setAmountForSend,
    setCurrentTokenForSend,
    setShowWaitingSendAssetsPopup, setTokenSetted
} from '../../store/actions/walletSeed';
import InputChange from "../AmountBlock/InputChange";
import RightBlockBottom from "../AmountBlock/RightBlockBottom";
import BlockItem from "../AmountBlock/AmountBlock";
import MaxBtn from "../AmountBlock/MAXbtn";
import ShowBalance from "../AmountBlock/ShowBalance";
import SendConfirmPopup from "../SendConfirmPopup/SendConfirmPopup";
import {sendNativeTons, sendNFT, sendToken} from "../../extensions/sdk/run";
import {decrypt} from "../../extensions/seedPhrase";
import useSendAssetsCheckAmount from '../../hooks/useSendAssetsCheckAmount';
import useSendAssetsCheckAddress from '../../hooks/useSendAssetsCheckAddress';
import WaitingPopup from "../WaitingPopup/WaitingPopup";
import {setTips} from "../../store/actions/app";

function SendAssets() {

    const dispatch = useDispatch();
    const history = useHistory();
    const amountToSend = useSelector(state => state.walletSeedReducer.amountToSend);
    const addressToSend = useSelector(state => state.walletSeedReducer.addressToSend);
    const currentTokenForSend = useSelector(state => state.walletSeedReducer.currentTokenForSend);
    const showAssetsForSend = useSelector(state => state.walletSeedReducer.showAssetsForSend);
    const tokenSetted = useSelector(state => state.walletSeedReducer.tokenSetted);
    const showWaitingSendAssetPopup = useSelector(state => state.walletSeedReducer.showWaitingSendAssetPopup);
    const [sendConfirmPopupIsVisible, setsendConfirmPopupIsVisible] = useState(false)

    const clientData = useSelector(state => state.walletReducer.clientData);

    const encryptedSeedPhrase = useSelector(state => state.enterSeedPhrase.encryptedSeedPhrase);
    const seedPhrasePassword = useSelector(state => state.enterSeedPhrase.seedPhrasePassword);

    let curExt = useSelector(state => state.appReducer.curExt);

    const {isInvalid: isInvalidAmount, validationMsg: validationMsgForAmount} = useSendAssetsCheckAmount();
    const {isInvalid: isInvalidAddress, validationMsg: validationMsgForAddress} = useSendAssetsCheckAddress();
    // const [currentAsset, setcurrentAsset] = useState([])
    function handleSetSendPopupVisibility() {
//todo handle errors set block border red case error
        if (!tokenSetted) {
            console.log("please set token for send")
        } else if (!addressToSend) {
            console.log("please set address for send")
        } else if (!amountToSend) {

            console.log("amountToSend", typeof amountToSend, amountToSend, "currentTokenForSend.balance", typeof currentTokenForSend.balance, currentTokenForSend.balance)
            if (!currentTokenForSend.tokenName) {

                console.log("currentTokenForSend.CHECK", currentTokenForSend.tokenName)


            }
            console.log("error: amount should be set or you have not enought balance")
        } else (
            setsendConfirmPopupIsVisible(true)
        )

    }

    function handleHideConfirmPopup() {
//todo set block border red case error
        setsendConfirmPopupIsVisible(false)
    }

    function handleChangeAddress(e) {
        setaddressToSendView(e.currentTarget.value)
        // console.log()
        dispatch(setAddressForSend(e.currentTarget.value))
    }

    const [addressToSendView, setaddressToSendView] = useState("")

    function handleSetView() {
//todo add validation
//         if(!addressToSend.length){return}
        let spliced = addressToSend.slice(0, 7)
        let splicedpart2 = addressToSend.slice(59)
        let view = spliced + "..." + splicedpart2;
        console.log("addressTo", addressToSend)
        setaddressToSendView(view)
    }


    async function handleSendAsset() {
        console.log("addrto, nftLockStakeAddress", addressToSend, currentTokenForSend.addrData)
        if (!addressToSend) {
            return
        }
//todo refactor this

        setsendConfirmPopupIsVisible(false)
        dispatch(setShowWaitingSendAssetsPopup(true))

        if (currentTokenForSend.symbol === "DP") {
            let decrypted = await decrypt(encryptedSeedPhrase, seedPhrasePassword)
            const res = await sendNFT(curExt, addressToSend, currentTokenForSend.addrData, decrypted.phrase)

            if(!res.code){
                dispatch(setTips(
                    {
                        message: `Sended message to blockchain`,
                        type: "info",
                    }
                ))
            }else{
                dispatch(setTips(
                    {
                        message: `Something goes wrong - error code ${res.code}`,
                        type: "error",
                    }
                ))
            }
            console.log("sendTokens", res)
        } else if (currentTokenForSend.symbol === "TON Crystal") {
            if (!amountToSend) {
               return
            }
            // setsendConfirmPopupIsVisible(false)
            // dispatch(setShowWaitingSendAssetsPopup(true))

            let decrypted = await decrypt(encryptedSeedPhrase, seedPhrasePassword)
            const res = await sendNativeTons(clientData, addressToSend, amountToSend, decrypted.phrase)
            // dispatch(setShowWaitingSendAssetsPopup(false))
            if(!res.code){
                dispatch(setTips(
                    {
                        message: `Sended message to blockchain`,
                        type: "info",
                    }
                ))
            }else{
                dispatch(setTips(
                    {
                        message: `Something goes wrong - error code ${res.code}`,
                        type: "error",
                    }
                ))
            }
            console.log("sendNFT", res)
        } else {
            if (!amountToSend) {
                return
            }
            // setsendConfirmPopupIsVisible(false)
            // dispatch(setShowWaitingSendAssetsPopup(true))

            let decrypted = await decrypt(encryptedSeedPhrase, seedPhrasePassword)
            const res = await sendToken(curExt, currentTokenForSend.rootAddress, addressToSend, amountToSend, decrypted.phrase);
            // dispatch(setShowWaitingSendAssetsPopup(false))
            if(!res.code){
                dispatch(setTips(
                    {
                        message: `Sended message to blockchain`,
                        type: "info",
                    }
                ))
            }else{
                dispatch(setTips(
                    {
                        message: `Something goes wrong - error code ${res.code}`,
                        type: "error",
                    }
                ))
            }
            console.log("sendToken", res)
        }
        setaddressToSendView("")
        dispatch(setCurrentTokenForSend({}))
        dispatch(setTokenSetted(false))
        dispatch(setAmountForSend(""))
        dispatch(setAddressForSend(""))
        dispatch(setShowWaitingSendAssetsPopup(false))

    }

    function handleClearInput() {
        setaddressToSendView("")
        dispatch(setAddressForSend(""))
    }

    function handleBack() {
        dispatch(setAddressForSend(""))
        history.push("/wallet")
    }

    return (

        <div className="container">

            {!showWaitingSendAssetPopup &&
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
                        <div className={cls("recipient_wrapper", {amount_wrapper_error: isInvalidAddress})}>
                            <div className="send_text_headers">
                                Recipient address
                            </div>
                            <div onBlur={() => handleSetView()}>
                                <div className="send_inputs">
                                    <input
                                        onChange={(e) => handleChangeAddress(e)}

                                        value={addressToSendView}
                                        className="recipient_input"
                                        placeholder={"0:..."}
                                    />
                                    <CloseIcon
                                        // style=
                                        fontSize="medium"

                                        onClick={() => handleClearInput("address")}
                                    />
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        {isInvalidAddress &&
                        <FormHelperText style={{marginLeft: "27px", marginTop: "4px"}} error id="component-error-text">{validationMsgForAddress}</FormHelperText>}
                        {console.log(isInvalidAddress,
                            validationMsgForAddress)}
                        <BlockItem
                            leftTitle={"Amount"}
                            // currentToken={currentToken}
                            rightTopBlock={
                                <ShowBalance
                                    classWrapper={"send_balance center"}
                                    balance={currentTokenForSend.balance}
                                    label={true}
                                    showBal={tokenSetted}
                                />}
                            rightBottomBlock={
                                <RightBlockBottom
                                    enableMax={<MaxBtn/>}
                                />}
                            leftBlockBottom={<InputChange/>}
                            className={isInvalidAmount && "amount_wrapper_error"}
                        />
                        {isInvalidAmount &&
                        <FormHelperText style={{marginLeft: "27px", marginTop: "4px"}} error id="component-error-text">{validationMsgForAmount}</FormHelperText>}

                        <div className="btn_wrapper ">
                            <button onClick={() => handleSetSendPopupVisibility()} className="btn mainblock-btn">Send
                            </button>
                        </div>
                    </div>
                }
            />
            }
            {sendConfirmPopupIsVisible
            &&
            <SendConfirmPopup
                // showConfirmPopup={()=>handleSetSendPopupVisibility(false)}
                hideConfirmPopup={() => handleHideConfirmPopup(false)}
                addressToSend={addressToSendView}
                currentAsset={currentTokenForSend}
                amountToSend={amountToSend}
                handleSend={() => handleSendAsset()}
            />
            }



            {showWaitingSendAssetPopup &&
            <WaitingPopup
                text={`Sending ${amountToSend} ${currentTokenForSend.symbol}`}
            />}
        </div>

    )
}

export default SendAssets;

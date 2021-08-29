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
import {
    agregate2,
    agregateQueryNFTassets,
    getCodeHashFromNFTRoot,
    getCodeHashFromTVC,
    getDataInfo
} from "../../extensions/webhook/script"
import SwapConfirmPopup from "../SwapConfirmPopup/SwapConfirmPopup";
import SendConfirmPopup from "../SendConfirmPopup/SendConfirmPopup";
import {sendNFT, sendToken} from "../../extensions/sdk/run";
function SendAssets() {

    const dispatch = useDispatch();
    const history = useHistory();
    const amountToSend = useSelector(state => state.walletSeedReducer.amountToSend);
    const addressToSend = useSelector(state => state.walletSeedReducer.addressToSend);
    const currentTokenForSend = useSelector(state => state.walletSeedReducer.currentTokenForSend);
    const showAssetsForSend = useSelector(state => state.walletSeedReducer.showAssetsForSend);
    const tokenSetted = useSelector(state => state.walletSeedReducer.tokenSetted);
    const [sendConfirmPopupIsVisible, setsendConfirmPopupIsVisible] = useState(false)




    let curExt = useSelector(state => state.appReducer.curExt);

    // const [currentAsset, setcurrentAsset] = useState([])
    function handleSetSendPopupVisibility() {
//todo handle errors set block border red case error
        if (!tokenSetted) {
            console.log("please set token for send")
        } else if (!addressToSend) {
            console.log("please set address for send")
        } else if (!amountToSend || +amountToSend > +currentTokenForSend.balance) {

            console.log("amountToSend",typeof amountToSend,amountToSend,"currentTokenForSend.balance",typeof currentTokenForSend.balance,currentTokenForSend.balance)
            if (!currentTokenForSend.tokenName) {
                console.log("currentTokenForSend.CHECK",currentTokenForSend.tokenName)
                setsendConfirmPopupIsVisible(true)
            }
            console.log("error: amount should be set or you have not enought balance")
        }else(
            setsendConfirmPopupIsVisible(true)
        )

    }
    function handleHideConfirmPopup() {
//todo set block border red case error
        setsendConfirmPopupIsVisible(false)
    }
    function handleChangeAddress(e) {

        dispatch(setAddressForSend(e.currentTarget.value))
    }

    function handleSetView() {
//todo add validation
//         if(!addressToSend.length){return}
        // let spliced = addressToSend.slice(0, 7)
        // let splicedpart2 = addressToSend.slice(59)
        // let view = spliced + "..." + splicedpart2;
        // console.log("addressTo", addressToSend)
        // dispatch(setAddressForSend(addressToSend))
    }



    async function handleSendAsset() {
        if(currentTokenForSend.tokenSymbol === "DP"){
            const res = await sendNFT(curExt,addressToSend,currentTokenForSend.addrData)
            console.log("sendNFT", res)
        }else {
            const res = await sendToken(curExt,currentTokenForSend.rootAddress,addressToSend,amountToSend);
            console.log("sendToken", res)
        }


    }

    function handleClearInput() {

        dispatch(setAddressForSend(""))
    }

    function handleBack() {
        dispatch(setAddressForSend(""))
        history.push("/wallet")
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
                                        // style=
                                        fontSize="medium"

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

                        <div className="btn_wrapper" onClick={()=>handleSetSendPopupVisibility()}>
                            <button className="btn wallet-btn">Send</button>
                        </div>
                    </div>
                }
            />
            }
            { sendConfirmPopupIsVisible
                &&
                    <SendConfirmPopup
                        // showConfirmPopup={()=>handleSetSendPopupVisibility(false)}
                        hideConfirmPopup={()=>handleHideConfirmPopup(false)}
                        addressToSend={addressToSend}
                        currentAsset={currentTokenForSend}
                        amountToSend={amountToSend}
                        handleSend={()=>handleSendAsset()}
                    />
                }
        </div>

    )
}

export default SendAssets;

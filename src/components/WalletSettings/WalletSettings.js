import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainBlock from '../../components/MainBlock/MainBlock';
import './WalletSettings.scss';
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
import MultilineTextFields from "./CustomList";
import NativeSelect from '@material-ui/core/NativeSelect';
import {showRevealSeedPhrase} from "../../store/actions/enterSeedPhrase";
import {decrypt} from "../../extensions/seedPhrase";

const networksArray = [
    {
        value: 'net.ton.dev',
        label: 'net.ton.dev',
    },
    {
        value: 'fld.ton.dev',
        label: 'fld.ton.dev',
    }
];


function WalletSettings() {
    const history = useHistory();
    const dispatch = useDispatch();
    const seedPhrasePassword = useSelector(state => state.enterSeedPhrase.seedPhrasePassword)


    function handleBack() {
        history.push("/wallet")
    }
    function handlePushToKeys() {
        history.push("/wallet/settings/keys")
    }
    function handleChangeNetwork(e) {
        console.log("222",e)
    }
    async function openRevealSeedPhrase() {
        let esp = localStorage.getItem("esp");
        let decrypted = await decrypt(esp, seedPhrasePassword)
        dispatch(showRevealSeedPhrase(decrypted.phrase))
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
                                Settings
                            </div>

                        </div>
                        <div className="recipient_wrapper">
                            <div className="send_text_headers">
                                Network
                            </div>
                            <div>
                                <div className="send_inputs2">

                                    <MultilineTextFields

                                        networksArray={networksArray}
                                    />

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div className="bottomBtnsWrapper">
                            <div className="btn_wrapper">
                                <button className="btn wallet-btn" onClick={() => openRevealSeedPhrase()} style={{"boxShadow": "0px 14px 44px rgba(69, 88, 255, 0.23)"}} onClick={openRevealSeedPhrase}>Reveal Seed Phrase</button>
                            </div>
                            <div className="btn_wrapper">
                                <button className="btn wallet-btn" onClick={() => handlePushToKeys()} style={{"boxShadow": "0px 14px 44px rgba(69, 88, 255, 0.23)"}}>Public & Private Keys</button>
                            </div>
                        </div>
                    </div>
                }
            />

        </div>

    )
}

export default WalletSettings;

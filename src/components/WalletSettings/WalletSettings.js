import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainBlock from '../../components/MainBlock/MainBlock';
import './WalletSettings.scss';
import arrowBack from '../../images/arrowBack.png';
import {useHistory} from "react-router-dom";
import MultilineTextFields from "./CustomList";
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
        console.log("222", e)
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
                                <button className="btn wallet-btn" onClick={() => openRevealSeedPhrase()}
                                        style={{"boxShadow": "0px 14px 44px rgba(69, 88, 255, 0.23)"}}>Reveal Seed
                                    Phrase
                                </button>
                            </div>
                            <div className="btn_wrapper">
                                <button className="btn wallet-btn" onClick={() => handlePushToKeys()}
                                        style={{"boxShadow": "0px 14px 44px rgba(69, 88, 255, 0.23)"}}>Public & Private
                                    Keys
                                </button>
                            </div>
                        </div>
                    </div>
                }
            />

        </div>

    )
}

export default WalletSettings;

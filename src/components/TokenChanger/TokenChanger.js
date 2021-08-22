import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SetTokenBlock from "../AmountBlock/SetTokenBlock";
import SelectTokenMenu from "../AmountBlock/SelectTokenMenu";
import {
    setAmountForSend,
    setCurrentTokenForSend,
    setShowAssetsForSend, setTokenForReceiveSetted,
    setTokenSetted
} from "../../store/actions/walletSeed";
import TON from "../../images/tokens/TON.svg";
import {useHistory} from "react-router-dom";
import AssetsModal from "../SendAssets/AssetsModal";


function TokenChanger(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const tokenForReceiveSetted = useSelector(state => state.walletSeedReducer.tokenForReceiveSetted);
    const currentTokenForReceive = useSelector(state => state.walletSeedReducer.currentTokenForReceive);

    function handleTouchTokenModal(){

        history.push("/receiveAssets")
    }
    function handleTouchTokenModal2(){
        dispatch(setTokenForReceiveSetted(true))
        history.push("/receiveAssets")
    }

    return (
        <>
            {tokenForReceiveSetted ?
                <>
                    <div className="send_set_token_wrap">
                        {props.enableMax}
                        <SetTokenBlock
                            handleTouchTokenModal={()=>handleTouchTokenModal()}
                            img={TON}
                            currentToken={currentTokenForReceive}
                        />
                    </div>
                </>
                :
                <div className="send_select_wrap">
                    <SelectTokenMenu
                        handleTouchTokenModal2={()=>handleTouchTokenModal2()}
                    />
                </div>
            }

        </>
    )
}

export default TokenChanger;

import React from "react";
import {setAmountForSend} from "../../store/actions/walletSeed";
import {useDispatch, useSelector} from "react-redux";

function InputChange() {
    const dispatch = useDispatch();

    function handleChangeAmount(e) {
        dispatch(setAmountForSend(e.currentTarget.value))
    }

    const amountToSend = useSelector(state => state.walletSeedReducer.amountToSend);
    const inputNFTdisabled = useSelector(state => state.walletSeedReducer.inputNFTdisabled);

    return (
        <div className="send_inputs">
            <input
                onChange={(e) => handleChangeAmount(e)}
                value={amountToSend}
                className="amount_input"
                placeholder={"0"}
                type="number"
                disabled={inputNFTdisabled}
                // max={props.currentToken.balance}
            />
        </div>
    )
}

export default InputChange;
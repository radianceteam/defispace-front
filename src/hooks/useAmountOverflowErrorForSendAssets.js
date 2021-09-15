import { useSelector } from "react-redux";
import { useEffect } from "react";
import useAmountOverflowError from "./useAmountOverflowError";

/**
 * Special case for assets send modal window derived from useAmountOverflowError
 * 
 * @returns {HookReturn}
 * 
 * @typedef {object} HookReturn
 * @property {boolean} error
 * @property {string} errorMsg
 */
export default function useAmountOverflowErrorForSendAssets() {
    const amountToSend = useSelector(state => state.walletSeedReducer.amountToSend);

	const amountToSendNum = Number(amountToSend)

    const { error, errorMsg, validate } = useAmountOverflowError(amountToSendNum)

    useEffect(() => {
        validate(Number(amountToSendNum))
    }, [amountToSend])

	return {
		error,
		errorMsg
	}
}
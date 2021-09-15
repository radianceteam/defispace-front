import { useSelector } from "react-redux";
import { useEffect } from "react";
import useAmountOverflowValidation from "./useAmountOverflowValidation";

/**
 * Special case hook for "/assets/send" modal window for amount check
 * 
 * @returns {HookReturn}
 * 
 * @typedef {object} HookReturn
 * @property {boolean} isInvalid
 * @property {string} VALIDATION_MSG
 */
export default function useAmountOverflowErrorForSendAssets() {
	const amountToSend = useSelector(state => state.walletSeedReducer.amountToSend);

	const amountToSendNum = Number(amountToSend)

	const {
		isInvalid,
		VALIDATION_MSG,
		validate,
	} = useAmountOverflowValidation(amountToSendNum)

	useEffect(() => {
		validate(Number(amountToSendNum))
	}, [amountToSend])

	return {
		isInvalid,
		VALIDATION_MSG
	}
}
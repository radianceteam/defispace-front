import { useSelector } from "react-redux";
import { useState } from "react";

/**
 * Check of provided amount against wallet's balance
 * 
 * @param {number} amount 
 * @returns {HookReturn}
 * 
 * @typedef {object} HookReturn
 * @property {boolean} error
 * @property {string} errorMsg
 * @property {ValidateFn} validate
 * 
 * @callback ValidateFn
 * @param {number} amount
 * @returns {void}
 */
export default function useAmountOverflowError(amount) {
	const clientData = useSelector((state) => state.walletReducer.clientData);

	const [error, setError] = useState(checkIfAmountExceeds(amount));

	function checkIfAmountExceeds(amount) {
		return amount > clientData.balance;
	}

	function validate(amount) {
		if (checkIfAmountExceeds(amount))
			setError(true);
		else
			setError(false);
	}

	return {
		error,
		errorMsg: "Not enough tokens in your account",
		validate,
	};
}
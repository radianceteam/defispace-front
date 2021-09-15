import { useSelector } from "react-redux";
import { useState } from "react";

const VALIDATION_MSG = "Not enough tokens in your account";

/**
 * Check of provided amount against wallet's balance
 * 
 * @param {number} amount 
 * @returns {HookReturn}
 * 
 * @typedef {object} HookReturn
 * @property {boolean} isValid
 * @property {string} VALIDATION_MSG
 * @property {ValidateFn} validate
 * 
 * @callback ValidateFn
 * @param {number} amount
 * @returns {void}
 */
export default function useAmountOverflowValidation(amount) {
	const clientData = useSelector((state) => state.walletReducer.clientData);

	const [isValid, setIsValid] = useState(checkIfAmountExceeds(amount));

	function checkIfAmountExceeds(amount) {
		return amount > clientData.balance;
	}

	function validate(amount) {
		if (checkIfAmountExceeds(amount))
			setIsValid(true);
		else
			setIsValid(false);
	}

	return {
		isValid,
		VALIDATION_MSG,
		validate,
	};
}
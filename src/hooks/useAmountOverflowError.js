import { useSelector } from "react-redux";
import { useState } from "react";

export default function useAmountOverflowError(amount) {
	const clientData = useSelector((state) => state.walletReducer.clientData);

	const [error, setError] = useState(checkIfAmountExceeds(amount));

	function checkIfAmountExceeds(amount) {
		return amount >= clientData.balance;
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
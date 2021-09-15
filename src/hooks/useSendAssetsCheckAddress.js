import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import tonClient from "../extensions/webhook/script";

const VALIDATION_MSG = "You provided incorrect address"

const re = /.:.{64}/

/**
 * Special case hook for "/assets/send" modal window for address check
 * 
 * @returns {HookReturn} 
 * 
 * @typedef {object} HookReturn
 * @property {boolean} isValid
 * @property {boolean} isLoading
 * @property {string} VALIDATION_MSG
 */
export default function useSendAssetsCheckAddress() {
	const [state, setState] = useState({ isValid: undefined, isLoading: false });

	const addressToSend = useSelector(state => state.walletSeedReducer.addressToSend);

	const refTimer = useRef(null);

	useEffect(() => {
		if (!re.test(addressToSend)) {
			setState({ isValid: false, isLoading: false });
			return;
		}

		setState({ isValid: undefined, isLoading: true });

		if (refTimer.current)
			clearTimeout(refTimer.current);

		refTimer.current = setTimeout(() => {
			tonClient.utils.convert_address({
				address: addressToSend,
				output_format: {
					type: 'Hex'
				},
			})
				.then(() => { setState({ isValid: true, isLoading: false }); })
				.catch((err) => { setState({ isValid: false, isLoading: false }); });
		}, 1e3);
	}, [addressToSend])

	return {
		...state,
		VALIDATION_MSG
	};
}
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import tonClient, {getDetailsFromTONtokenWallet} from "../extensions/webhook/script";

const DEFAULT_VALIDATION_MSG = "Incorrect address"
const VALIDATION_MSG_ROOTS_ERROR = "Incorrect token wallet address"
const VALIDATION_MSG_ROOTS_SUC = "Complete"
const INCORRECT_LENGTH = "Incorrect address length"
const NOT_TON_VALID_ADDRESS = "Incorrect TON blockchain address"

const re = /.:.{64}/

/**
 * Special case hook for "/assets/send" modal window for address check
 *
 * @returns {HookReturn}
 *
 * @typedef {object} HookReturn
 * @property {boolean} isInvalid
 * @property {boolean} isLoading
 * @property {string} VALIDATION_MSG
 */
export default function useSendAssetsCheckAddress() {
	const [state, setState] = useState({ isInvalid: undefined, isLoading: false,VALIDATION_MSG:DEFAULT_VALIDATION_MSG});

	const addressToSend = useSelector(state => state.walletSeedReducer.addressToSend);
	const currentTokenForSend = useSelector(state => state.walletSeedReducer.currentTokenForSend);

	const refTimer = useRef(null);

	useEffect(async () => {
		if (!re.test(addressToSend)) {
			setState({ isInvalid: true, isLoading: false,VALIDATION_MSG:INCORRECT_LENGTH });
			return;
		}

		setState({ isInvalid: undefined, isLoading: true });

		if (refTimer.current)
			clearTimeout(refTimer.current);

		refTimer.current = setTimeout(() => {
			tonClient.utils.convert_address({
				address: addressToSend,
				output_format: {
					type: 'Hex'
				},
			})
				.then(async () => {
					if (currentTokenForSend.type === "PureToken"){
						const tokenForSendRoot = currentTokenForSend.rootAddress;
						const addressToSendRoot = await getDetailsFromTONtokenWallet(addressToSend)
						if(tokenForSendRoot === addressToSendRoot){
							setState({ isInvalid: false, isLoading: false, VALIDATION_MSG:VALIDATION_MSG_ROOTS_SUC });
						}else{
							setState({ isInvalid: true, isLoading: false, VALIDATION_MSG:VALIDATION_MSG_ROOTS_ERROR });
						}
					}else{
						setState({ isInvalid: false, isLoading: false });
					}

				})
				.catch((err) => {

					console.log("rrrrr",err)
					setState({ isInvalid: true, isLoading: false,VALIDATION_MSG:NOT_TON_VALID_ADDRESS }); });
		}, 1e3);
	}, [addressToSend])
	return {
		...state,
	};
}

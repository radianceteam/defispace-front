import {
  SET_WALLET,
  SET_CLIENT_DATA,
  SET_TOKEN_LIST,
  SET_PAIRS_LIST,
  SET_LIQUIDITY_LIST,
  SET_TRANSACTIONS_LIST,
  SET_SUBSCRIBE_DATA, SHOW_STACKING_CONFIRM_POPUP, HIDE_STACKING_CONFIRM_POPUP,
  SET_SUBSCRIBE_RECEIVE_TOKENS,
    SET_ACCEPTED_PAIR_TOKENS,
} from './types';

export function openStackingConfirmPopup(payload) {
  return { type: SHOW_STACKING_CONFIRM_POPUP, payload };
};

export function hideStackingConfirmPopup(payload) {
  return { type: HIDE_STACKING_CONFIRM_POPUP, payload };
};


export function setWallet(payload) {
  localStorage.setItem('wallet', JSON.stringify(payload));
  return { type: SET_WALLET, payload };
};

export function setClientData(payload) {
  console.log("setPubKey",payload)
  localStorage.setItem('pubKey', JSON.stringify(payload));
  return { type: SET_CLIENT_DATA, payload };
};

export function setTokenList(payload) {
  // localStorage.setItem('tokenList', JSON.stringify(payload));
  return { type: SET_TOKEN_LIST, payload };
};

export function setLiquidityList(payload) {
  // localStorage.setItem('liquidityList', JSON.stringify(payload));
  return { type: SET_LIQUIDITY_LIST, payload };
};

export function setPairsList(payload) {
  return { type: SET_PAIRS_LIST, payload };
};

export function setTransactionsList(payload) {
  localStorage.setItem('transactionsList', JSON.stringify(payload));
  return { type: SET_TRANSACTIONS_LIST, payload };
};
export function setSubscribeReceiveTokens(payload) {
  localStorage.setItem('setSubscribeReceiveTokens', JSON.stringify(payload))
  return { type: SET_SUBSCRIBE_RECEIVE_TOKENS, payload };
};

export function setAcceptedPairTokens(payload) {
  localStorage.setItem('acceptedPairTokens', JSON.stringify(payload))
  return { type: SET_ACCEPTED_PAIR_TOKENS, payload };
};


export function setSubscribeData(payload) {
  localStorage.setItem('setSubscribeData', JSON.stringify(payload))
  return { type: SET_SUBSCRIBE_DATA, payload };
};

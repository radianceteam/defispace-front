import {
  SET_WALLET,
  SET_PUBKEY,
  SET_TOKEN_LIST,
  SET_PAIRS_LIST,
  SET_LIQUIDITY_LIST,
  SET_TRANSACTIONS_LIST,
  SET_SUBSCRIBE_DATA, SHOW_STACKING_CONFIRM_POPUP, HIDE_STACKING_CONFIRM_POPUP
} from '../actions/types';

const initialState = {
  wallet: {
    id: '',
    balance: 0
  },
  pubKey: {
    status: false,
    address: ''
  },
  tokenList: [],
  pairsList: [],
  liquidityList: [],
  transactionsList: [],
  subscribeData: {},
  stackingConfirmPopupIsVisible: false
};

const walletReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_STACKING_CONFIRM_POPUP:
      return {
        ...state,
        stackingConfirmPopupIsVisible: true
      };
    case HIDE_STACKING_CONFIRM_POPUP:
      return {
        ...state,
        stackingConfirmPopupIsVisible: false
      };
    case SET_WALLET:
      return {
        ...state,
        wallet: payload
      };
    case SET_PUBKEY:
      return {
        ...state,
        pubKey: {
          status: payload.status,
          address: payload.dexclient
        }
      };
    case SET_TOKEN_LIST:
      return {
        ...state,
        tokenList: payload
      };
    case SET_PAIRS_LIST:
      return {
        ...state,
        pairsList: payload
      };
    case SET_LIQUIDITY_LIST:
      return {
        ...state,
        liquidityList: payload
      };
    case SET_TRANSACTIONS_LIST:
      return {
        ...state,
        transactionsList: payload
      };
    case SET_SUBSCRIBE_DATA:
      return {
        ...state,
        subscribeData: payload
      };
    default:
      return state;
  }
};

export default walletReducer;
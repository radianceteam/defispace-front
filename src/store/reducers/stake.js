import {
  SET_AMOUNT_FOR_STACkING,
  SET_PERIOD_FOR_STACkING,
  SET_APY_FOR_STACKING
} from '../actions/types';

const initialState = {
  amountForStacking:0,
  periodForStacking:0,
  apyForLockStake:0
};

const stakingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AMOUNT_FOR_STACkING:
      return {
        ...state,
        amountForStacking: payload
      }
    case SET_PERIOD_FOR_STACkING:
      return {
        ...state,
        periodForStacking: payload
      }
    case SET_APY_FOR_STACKING:
      return {
        ...state,
        apyForLockStake: payload
      }

    default:
      return state;
  }
};

export default stakingReducer;

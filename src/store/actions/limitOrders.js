import {
    SHOW_ORDERS_FROM_SELECT,
    HIDE_ORDERS_FROM_SELECT,
    SHOW_ORDERS_TO_SELECT,
    HIDE_ORDERS_TO_SELECT,
    SET_ORDERS_FROM_INPUT_VALUE,
    SET_ORDERS_TO_INPUT_VALUE,
    SET_ORDERS_FROM_TOKEN,
    SET_ORDERS_TO_TOKEN, SET_ORDERS_RATE, SET_ORDERS_PAIR_ID
} from './types';

export function setOrdersFromInputValue(payload) {
    return {type: SET_ORDERS_FROM_INPUT_VALUE, payload}
}
// export function setOrdersFromInputValueChange(payload) {
//     return {type: SET_ORDERS_FROM_INPUT_VALUE_CHANGE, payload}
// }

export function setOrdersToInputValue(payload) {
    return {type: SET_ORDERS_TO_INPUT_VALUE, payload}
}

export function setOrdersFromToken(payload) {
    return {type: SET_ORDERS_FROM_TOKEN, payload}
}

export function setOrdersToToken(payload) {
    return {type: SET_ORDERS_TO_TOKEN, payload}
}

export function setOrdersRate(payload) {
    return {type: SET_ORDERS_RATE, payload}
}

export function setOrdersPairId(payload) {
    return {type: SET_ORDERS_PAIR_ID, payload}
}

export function showOrdersFromSelect() {
    return {type: SHOW_ORDERS_FROM_SELECT}
}

export function hideOrdersFromSelect() {
    return {type: HIDE_ORDERS_FROM_SELECT}
}

export function showOrdersToSelect() {
    return {type: SHOW_ORDERS_TO_SELECT}
}

export function hideOrdersToSelect() {
    return {type: HIDE_ORDERS_TO_SELECT}
}


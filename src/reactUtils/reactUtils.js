import {setPairsList} from "../store/actions/wallet";

const {setLiquidityList} = require("../store/actions/wallet");
const {setTokenList} = require("../store/actions/wallet");
const {getAllClientWallets} = require("../extensions/webhook/script");
import {store} from '../index'
import {
    checkClientPairExists,
    checkwalletExists,
    getAllPairsWoithoutProvider,
    subscribe
} from "../extensions/webhook/script";

export async function getAllTokensAndSetToStore(clientAddress) {

    let tokenList = await getAllClientWallets(clientAddress);
    let liquidityList = [];
    if (tokenList.length) {
        tokenList.forEach(async item => await subscribe(item.walletAddress));
        liquidityList = tokenList.filter(i => i.symbol.includes('/'));
        tokenList = tokenList.filter(i => !i.symbol.includes('/'))
        store.dispatch(setTokenList(tokenList));
        store.dispatch(setLiquidityList(liquidityList));
    }
}


export async function getAllPairsAndSetToStore(clientAddress) {
    const pairs = await getAllPairsWoithoutProvider();

    let arrPairs = [];
    await pairs.map(async item => {
        item.exists = await checkClientPairExists(clientAddress, item.pairAddress)
        item.walletExists = await checkwalletExists(clientAddress, item.pairAddress)

        arrPairs.push(item)
    })

    store.dispatch(setPairsList(arrPairs));


}

export function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
}
export function calculateRate(stake, percent,period){
    const years = period/12
    console.log("stake",stake,"percent",percent,"years",years)
    const totalProfit = stake * (Math.pow((1+(percent/100)),years))
    return totalProfit
}

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


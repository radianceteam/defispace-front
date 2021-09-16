import React, {useState, useEffect} from 'react';
import './AssetsList.scss';
import TON from '../../images/tokens/TON.svg';
import wBTC from '../../images/tokens/wBTC.svg';
import wETH from '../../images/tokens/wEth.svg';

import {useSelector} from "react-redux";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// function deepEqual (obj1, obj2){
//     return JSON.stringify(obj1)===JSON.stringify(obj2);
// }
function AssetsList(props) {
console.log("menyyyyy",props)
    return (

        <div className={props.assetWrap ? props.assetWrap + " assets_wrapper" : "assets_wrapper"} onClick={()=>console.log("props",props)}>
            {props.TokenAssetsArray.map((item,i) => (
                <div className="assets_item_wrapper" onClick={() => props.handleClickToken(item)}
                     key={i}>
                    <div style={{"display": "flex"}}>
                        <div>
                            <img className="arrow_icons2" src={item.icon} alt={"send assetsList"}/>
                        </div>
                        <div style={{marginLeft: "15px"}}>
                            <div style={{"fontWeight": "bold"}}>
                                {item.symbol}
                            </div>
                            <div style={{fontSize: "14px"}}>
                                {item.tokenName}
                            </div>
                        </div>
                    </div>
                    <div>
                        {item.balance === 0 ? "0.0000" : item.balance < 0.0001 ? parseFloat(item.balance).toFixed(8) : parseFloat(item.balance).toFixed(4)}
                    </div>
                </div>
            ))}
            {props.NFTassetsArray && props.NFTassetsArray.map(item => (
                <div
                    className="assets_item_wrapper"
                    onClick={() => props.handleClickNFT(item)}
                    key={item._safeLockStake}>
                    <div className="NFT_item">
                        <div className="NFT_item_header">
                            <div style={{"display": "flex","alignItems": "flex-start"}}>
                                <div className="assetList_item_icon">
                                    <img className="arrow_icons2" src={item.icon} alt={"send assetsList"}/>
                                </div>
                                <div style={{marginLeft: "15px"}}>
                                    <div style={{"fontWeight": "bold"}}>
                                        Depool stake
                                    </div>
                                    <div style={{fontSize: "14px"}}>
                                        LockStake
                                    </div>
                                </div>
                            </div>
                            <div>
                                {Number(item.stakeTotal / 1e9).toFixed(4)}
                            </div>
                        </div>
                        {item.showNftData &&
                        <div className="NFT_additional_data">
                            <div className="NFT_additional_block">
                                <div>
                                    <div>
                                        APY
                                    </div>
                                    <div>
                                        {item.details.apyLockStake}%
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        Period
                                    </div>

                                    <div>
                                        {item.details.periodLockStake} sec
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Start time
                                    </div>
                                    <div>
                                        {Number(item.details.timeStartLockStake)}
                                    </div>
                                </div>
                            </div>
                            <div className="NFT_additional_block2">
                                <div>
                                    <div>
                                        Stake
                                    </div>
                                    <div>
                                        {(Number(item.stakeTotal))/1000000000}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Profit
                                    </div>
                                    <div>
                                        {(Number(item.stakeTotal) * (item.details.apyLockStake * 0.01))/1000000000}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Total income
                                    </div>
                                    <div>
                                        {(Number(item.stakeTotal) + item.stakeTotal * (item.details.apyLockStake * 0.01))/1000000000}
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            ))}


        </div>


    )
}

export default AssetsList;

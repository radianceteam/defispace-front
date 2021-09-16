import React from 'react';
import './AssetsList.scss';
import TON from '../../images/tonCrystalDefault.svg';
import {getDurationFromSeconds, getFormattedDate} from "../../reactUtils/getDurationFromSeconds";
import {calculateRate} from "../../reactUtils/reactUtils";
// function deepEqual (obj1, obj2){
//     return JSON.stringify(obj1)===JSON.stringify(obj2);
// }
function AssetsList(props) {
    console.log("menyyyyy", props)

console.log("menyyyyy",props)
    return (
        <div className={props.assetWrap ? props.assetWrap + " assets_wrapper" : "assets_wrapper"}
             onClick={() => console.log("props", props)}>
            {props.TokenAssetsArray.sort((a, b) => (b.balance || 0) - (a.balance || 0)).map((item, i) => (
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
                                        DePool stake
                                    </div>
                                    <div style={{fontSize: "14px"}}>
                                        Lock stake
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
                                        {item.details.apyLockStake/100}%

                                    </div>
                                    <div>
                                        APY

                                    </div>
                                </div>

                                <div>
                                    <div>
                                        {getDurationFromSeconds(item.details.periodLockStake, "days")} days

                                    </div>

                                    <div>
                                        Period

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {getFormattedDate(Number(item.details.timeStartLockStake))}

                                    </div>
                                    <div>
                                        Start time

                                    </div>
                                </div>
                            </div>
                            <div className="NFT_additional_block2">
                                <div>
                                    <div style={{display: "flex"}}>
                                        <img style={{marginRight:"5px"}} src={TON} alt={"Ton Crystal"}/> {(Number(item.stakeTotal))/1000000000}

                                    </div>
                                    <div>
                                        Stake

                                    </div>
                                </div>
                                <div>
                                    <div style={{display: "flex"}}>
                                        <img style={{marginRight:"5px"}} src={TON} alt={"Ton Crystal"}/> {((calculateRate(item.stakeTotal, item.details.apyLockStake/100, (item.details.periodLockStake/ 30 / 60 / 60 / 24)) - Number(item.stakeTotal))/1000000000).toFixed(4)}

                                    </div>
                                    <div>
                                        Profit

                                    </div>
                                </div>
                                <div>
                                    <div style={{display: "flex"}}>
                                        <img style={{marginRight:"5px"}} src={TON} alt={"Ton Crystal"}/> {((calculateRate(item.stakeTotal, item.details.apyLockStake/100, item.details.periodLockStake/ 30 / 60 / 60 / 24))/1000000000).toFixed(4)}

                                    </div>
                                    <div>
                                        Total income

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

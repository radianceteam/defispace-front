import React, { useState, useEffect } from 'react';
import './AssetsList.scss';
import TON from '../../images/tokens/TON.svg';
import wBTC from '../../images/tokens/wBTC.svg';
import wETH from '../../images/tokens/wEth.svg';
import {useSelector} from "react-redux";


function AssetsList(props) {
    const assetstestArray = useSelector(state => state.walletSeedReducer.assetstestArray);


  return(

                <div className="assets_wrapper">
                    {assetstestArray.map(item => (
                        <div className="assets_item_wrapper" onClick={() => props.handleClick(item)} key={item.tokenName}>
                            <div style={{"display":"flex"}}>
                            <div>
                                <img className="arrow_icons2" src={item.icon} alt={"send assetsList"} />
                            </div>
                            <div style={{marginLeft: "15px"}}>
                                <div style={{"fontWeight":"bold"}}>
                                    {item.tokenSymbol}
                                </div>
                                <div style={{fontSize:"14px"}}>
                                    {item.tokenName}
                                </div>
                            </div>
                            </div>
                            <div>
                                {item.balance}
                            </div>
                        </div>
                    ))}

                </div>


  )
}

export default AssetsList;

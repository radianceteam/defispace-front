import React from 'react';
import './AssetsList.scss';
function AssetsList(props) {
console.log("menyyyyy",props)
    return (
    <div className={props.assetWrap ? props.assetWrap + " assets_wrapper" : "assets_wrapper"} onClick={()=>console.log("props",props)}>
            {props.TokenAssetsArray.sort((a,b) => (b.balance || 0) - (a.balance || 0)).map((item,i) => (
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
                        {item.balance < 0.0001 ? parseFloat(item.balance).toFixed(8) : parseFloat(item.balance).toFixed(4)}
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
                            <div style={{"display": "flex","alignItems": "center" }}>
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
                                        asdas
                                    </div>
                                    <div>
                                        1
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        asdasd
                                    </div>

                                    <div>
                                        1
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        asdasd
                                    </div>
                                    <div>
                                        3
                                    </div>
                                </div>
                            </div>
                            <div className="NFT_additional_block2">
                                <div>
                                    <div>
                                        asd
                                    </div>
                                    <div>
                                        1
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        asd
                                    </div>
                                    <div>
                                        1
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        asdasd
                                    </div>
                                    <div>
                                        2
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

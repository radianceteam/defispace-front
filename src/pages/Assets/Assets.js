import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import MainBlock from '../../components/MainBlock/MainBlock';
import './Assets.scss';
import sendAssetsimg from '../../images/sendAssets.svg';
import receiveAssets from '../../images/receiveAssets.svg';
import goToExchange from '../../images/goToExchange.svg';
import settingsBtn from '../../images/Vector.svg';
import nativeBtn from '../../images/nativeadd.svg';
import AssetsList from "../../components/AssetsList/AssetsList";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {showTip} from "../../store/actions/app";

function Assets() {

  const history = useHistory();
  const dispatch = useDispatch();
  // const assetstestArray = useSelector(state => state.walletSeedReducer.assetstestArray);
  const [assets,setAssets] = useState([])
  const tokenList = useSelector(state => state.walletReducer.tokenList);
  const walletIsConnected = useSelector(state => state.appReducer.walletIsConnected);
  const NFTassets = useSelector(state => state.walletSeedReducer.NFTassets);

  useEffect(()=>{
    setAssets(NFTassets)

  },[NFTassets])

  function handleChangeOnSend() {
    history.push("/wallet/send")
  }

  function handleChangeOnReceive() {
    history.push("/wallet/receive")
  }

  function handlePushToExchange() {
    history.push("/swap")
  }

  function handleGoToSettings() {
    history.push("/wallet/settings")
  }
  function addTokenWallet(){
    history.push("/wallet/deployAssets")

  }
  function handleShowNFTData(curItem){
    console.log("curItem",curItem,"NFTassets",NFTassets)
    const copyAssets = JSON.parse(JSON.stringify(assets))
    copyAssets.map(item=> {

      console.log("item.id",item.id, "curItem.id",curItem.id)

      if(item.id === curItem.id){
        console.log("item.showNftData",item.showNftData, !item.showNftData)
        item.showNftData=!item.showNftData
      }
    })
    setAssets(copyAssets)
  }


  return (
      <>

        <div className="container" onClick={()=>dispatch(showTip())}>
          <MainBlock
              smallTitle={false}
              // title={'Assets'}
              content={
                <div>
                  <div className="head_wrapper">
                    <div className="left_block">
                      Your assets

                    </div>
                    <div className={"settings_btn_container"}>
                      <button className="settings_btn" onClick={() => handleGoToSettings()}>
                        <img src={settingsBtn} alt={"settings"}/>
                      </button>
                      <button className="settings_btn" onClick={() => addTokenWallet()}>
                        <img src={nativeBtn} alt={"native"}/>
                      </button>
                    </div>

                  </div>
                  <div className="action_btns">
                    <div>
                      <div className="onHover" onClick={() => handleChangeOnSend()}>
                        <img className="arrow_icons " src={sendAssetsimg} alt={"Send"}/>
                      </div>
                      <div className="action_btns_bottom_text">
                        Send
                      </div>
                    </div>
                    <div>
                      <div className="onHover" onClick={() => handleChangeOnReceive()}>
                        <img className="arrow_icons" src={receiveAssets} alt={"Receive"}/>
                      </div>
                      <div className="action_btns_bottom_text">
                        Receive
                      </div>
                    </div>
                    <div>
                      <div className="onHover" onClick={() => handlePushToExchange()}>
                        <img className="arrow_icons" src={goToExchange} alt={"Exchange"}/>
                      </div>
                      <div className="action_btns_bottom_text">
                        Swap
                      </div>
                    </div>
                  </div>

                {walletIsConnected ?
                    <>
                      {(NFTassets.length || tokenList.length) ?
                          <AssetsList
                              TokenAssetsArray={tokenList}
                              NFTassetsArray={assets}
                              handleClickNFT={(item) => handleShowNFTData(item)}
                              // showNFTdata={showNFTdata}
                              handleClickToken={() => console.log("token item")}
                          />
                          :
                          <div className="assets_loader_wrapper">
                            You have no wallets yet
                          </div>

                      }
                    </>
                    :
                    <div className="loginInAssets">

                      Login please
                    </div>
                }
              </div>
            }
        />
      </div>



</>
)
}

export default Assets;

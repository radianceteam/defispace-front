import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import MainBlock from '../../components/MainBlock/MainBlock';
import './Assets.scss';
import sendAssetsimg from '../../images/sendAssets.svg';
import receiveAssets from '../../images/receiveAssets.svg';
import goToExchange from '../../images/goToExchange.svg';
import settingsBtn from '../../images/Vector.svg';
import AssetsList from "../../components/AssetsList/AssetsList";

function Assets() {

  const history = useHistory();

    function handleChangeOnSend(){
      history.push("/send-assets")
    }
  function handleChangeOnReceive(){
    history.push("/receive")
  }
  function handlePushToExchange(){
    history.push("/swap")
  }
  return(
<>

    <div className="container">
      <MainBlock
          smallTitle={false}
          // title={'Assets'}
          content={
            <div>
              <div className="head_wrapper">
                <div className="left_block">
                  Your assets
                </div>
                <button className="settings_btn">
                  <img src={settingsBtn} alt={"settings"}/>
                </button>
              </div>
              <div className="action_btns">
                <div>
                  <div className="onHover" onClick={() => handleChangeOnSend(true)}>
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
                    Exchange
                  </div>
                </div>


              </div>


              <AssetsList
                  handleClick={() => console.log("item")}
              />
            </div>
          }
      />
      {/*}*/}
    </div>
</>)
}

export default Assets;

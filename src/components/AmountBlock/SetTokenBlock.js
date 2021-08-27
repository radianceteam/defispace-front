import arrowBottomBl from "../../images/arrowBottomBl.svg";
import React from "react";

function SetTokenBlock(props) {

    return (
        <div onClick={() => props.handleTouchTokenModal()} className="send_change_token">
            <div className="send_img_wrapper">
                <img className="send_token_img" src={props.currentToken.icon} alt={"arrow"}/>
            </div>
            <div className="send_img_wrapper">
                <div className="send_token_symbol">
                    {props.currentToken.tokenSymbol}
                </div>
                <div className="send_arrow_bottom_wrapper">
                    <img className="add_width" src={arrowBottomBl} alt={"arrow"}/>

                </div>
            </div>
        </div>

    )
}

export default SetTokenBlock;

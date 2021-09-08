import React from "react";

function BlockItem(props) {

    return(

<div className="amount_wrapper">
    <div className="amount_left_block">
        <div className="send_text_headers">
            {props.leftTitle}
        </div>
            {props.leftBlockBottom}
    </div>
    <div className="amount_right_block">
        {props.rightTopBlock}
        {props.rightBottomBlock}

    </div>

</div>
    )}
    export default BlockItem;

import React from "react";
import {useSelector} from "react-redux";

function ShowBalance(props) {

    return (
        <>
            {props.showBal ?
            <div className={props.classWrapper} style={{width: "100%", "textAlign": "end"}}>
                {props.label && "Balance: "} {props.balance < 0.0001 ? parseFloat(props.balance).toFixed(8) : parseFloat(props.balance).toFixed(4)}
            </div>
                :
                <div className={props.classWrapper}>

                </div>
            }
        </>
    )
}

export default ShowBalance;

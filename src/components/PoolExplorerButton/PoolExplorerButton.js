import React from 'react';
import PoolExplorer from "../PoolExplorer/PoolExplorer";
import './PoolExplorerButton.scss';
import {useDispatch, useSelector} from "react-redux";
import {showPoolExplorer} from "../../store/actions/poolExplorer";

function PoolExplorerButton() {
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.poolExplorer.poolExplorerIsVisible);
    return (
        <React.Fragment>
            <button title="Pool explorer" className="btn action-btn header-btn more"
                    onClick={() => dispatch(showPoolExplorer())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 26 26" version="1.1">
                    <g id="surface1">
                        <path
                            d="M 18.027344 2.265625 C 17.929688 2.3125 17.804688 2.40625 17.75 2.480469 C 17.664062 2.601562 17.660156 3.542969 17.660156 13.585938 L 17.660156 24.5625 L 15.644531 24.5625 L 15.644531 14.78125 L 15.480469 14.597656 L 15.3125 14.410156 L 13.09375 14.390625 C 10.664062 14.375 10.5625 14.386719 10.417969 14.703125 C 10.371094 14.804688 10.355469 16.191406 10.355469 19.703125 L 10.355469 24.5625 L 8.339844 24.5625 L 8.339844 18.695312 C 8.339844 12.273438 8.359375 12.574219 8.011719 12.429688 C 7.890625 12.382812 7.226562 12.367188 5.597656 12.378906 C 3.078125 12.394531 3.167969 12.382812 3.046875 12.820312 C 3.015625 12.953125 2.992188 15.128906 2.992188 18.792969 L 2.992188 24.5625 L 2.1875 24.5625 C 1.390625 24.5625 1.378906 24.5625 1.207031 24.71875 C 0.875 25.015625 0.953125 25.621094 1.359375 25.769531 C 1.558594 25.851562 24.441406 25.851562 24.640625 25.769531 C 25.046875 25.621094 25.125 25.015625 24.792969 24.722656 C 24.621094 24.5625 24.609375 24.5625 23.8125 24.5625 L 23.007812 24.5625 L 22.996094 13.585938 C 22.980469 1.800781 22.996094 2.496094 22.699219 2.296875 C 22.519531 2.175781 18.285156 2.152344 18.027344 2.265625 Z M 21.6875 14.007812 L 21.6875 24.5625 L 18.925781 24.5625 L 18.925781 3.453125 L 21.6875 3.453125 Z M 7.074219 19.097656 L 7.074219 24.5625 L 4.3125 24.5625 L 4.3125 13.632812 L 7.074219 13.632812 Z M 14.378906 20.105469 L 14.378906 24.5625 L 11.621094 24.5625 L 11.621094 15.644531 L 14.378906 15.644531 Z M 14.378906 20.105469 "/>
                    </g>
                </svg>

            </button>

            {isVisible &&
            <PoolExplorer/>}
        </React.Fragment>
    )
}

export default PoolExplorerButton;
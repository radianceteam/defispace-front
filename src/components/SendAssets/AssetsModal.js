import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './SendAssets.scss';
import arrowBack from '../../images/arrowBack.png';
import AssetsList from "../AssetsList/AssetsList";
import {useHistory} from "react-router-dom";
import {
    setAmountForSend,
    setCurrentTokenForSend,
    setInputNFTDisabled,
    setTokenSetted
} from "../../store/actions/walletSeed";
import useTokensList from '../../hooks/useTokensList';

function AssetsModal() {
    const history = useHistory();
    const dispatch = useDispatch();
    const NFTassets = useSelector(state => state.walletSeedReducer.NFTassets);

    const { tokensList } = useTokensList()

    function handleClear() {
        dispatch(setInputNFTDisabled(null))
        // dispatch(setAmountForSend(0))
        history.push("/wallet/send")
    }

    function handleSetNFT(item) {
        dispatch(setAmountForSend(""))

        dispatch(setInputNFTDisabled("disabled"))
        dispatch(setAmountForSend(item.stakeTotal))
        dispatch(setCurrentTokenForSend(item))

        dispatch(setTokenSetted(true))
        history.push("/wallet/send")
    }

    function handleSetToken(item) {
        console.log("mey otiem", item)
        dispatch(setAmountForSend(""))
        dispatch(setInputNFTDisabled(null))
        dispatch(setCurrentTokenForSend(item))
        dispatch(setTokenSetted(true))

        history.push("/wallet/send")
    }

    // const [showNFTdata, setShowNFTdata] = useState(false)
    //
    // function handleShowNFTData() {
    //     setShowNFTdata(!showNFTdata)
    //
    // }

    return (
        <>
            {/*{showAssetsForSend &&*/}
            <div className="container">
                <div className="mainblock">
                    <div className="head_wrapper">
                        <button className="arrow_back" onClick={() => handleClear()}>
                            <img src={arrowBack} alt={"arrow"}/>
                        </button>
                    </div>


                    <AssetsList
                        handleClickNFT={(item) => handleSetNFT(item)}
                        handleClickToken={(item) => handleSetToken(item)}
                        TokenAssetsArray={tokensList}
                        NFTassetsArray={NFTassets}
                        // showNFTdata={false}
                    />
                </div>
            </div>
        </>
    )
}

export default AssetsModal;

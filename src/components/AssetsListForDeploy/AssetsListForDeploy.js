import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import MainBlock from '../../components/MainBlock/MainBlock';
// import './Assets.scss';
import AssetsList from "../../components/AssetsList/AssetsList";

import {useDispatch, useSelector} from "react-redux";
import {getClientKeys} from "../../extensions/webhook/script";
import DeployAssetConfirmPopup from "../DeployAssetConfirmPopup/DeployAssetConfirmPopup";
import {connectToPairStep2DeployWallets} from "../../extensions/sdk/run";
import {decrypt} from "../../extensions/seedPhrase";
import "./AssetsListForDeploy.scss"

function AssetsListForDeploy() {

    const history = useHistory();
    const dispatch = useDispatch();

    const encryptedSeedPhrase = useSelector(state => state.enterSeedPhrase.encryptedSeedPhrase);
    const seedPhrasePassword = useSelector(state => state.enterSeedPhrase.seedPhrasePassword);
    const clientData = useSelector(state => state.walletReducer.clientData);
    const assetsFromGraphQL = useSelector(state => state.walletReducer.assetsFromGraphQL);

    // const [assetsList,setAssetsList] = useState([])
    const [curAssetForDeploy, setcurAssetForDeploy] = useState({})
    const [showAssetDepPopup, showConfirmAssetDeployPopup] = useState(false)
    const [loadingRoots, setLoadingRoots] = useState(false)
    // useEffect(async () => {
    //     setAssetsList(assetsFromGraphQL)
    // }, [assetsFromGraphQL])


    function handleSetAssetForDeploy(item) {
        showConfirmAssetDeployPopup(true)
        setcurAssetForDeploy(item)
    }

    function hideConfirm() {
        showConfirmAssetDeployPopup(false)

    }

    async function handleDeployAsset() {
        console.log("curAssetForDeploy", curAssetForDeploy)
        let decrypted = await decrypt(encryptedSeedPhrase, seedPhrasePassword)
        const keys = await getClientKeys(decrypted.phrase)
        const curPair = {rootA: curAssetForDeploy.rootAddress}

        const deployData = {
            curPair,
            clientAdr: clientData.address,
            clientRoots: ""
        }
        const deployRes = await connectToPairStep2DeployWallets(deployData, keys)
        console.log("deployRes", deployRes)
        showConfirmAssetDeployPopup(false)
    }

    return (

        <>
            {showAssetDepPopup &&

            <DeployAssetConfirmPopup
                handleDeployAsset={() => handleDeployAsset()}
                currentAsset={curAssetForDeploy}
                hideConfirmPopup={() => hideConfirm()}
            />}

            <div className="container">
                <MainBlock
                    class={"heightfixmainBlock"}
                    smallTitle={false}
                    // title={'Assets'}
                    content={
                        <div>
                            <div className="head_wrapper">
                                <div className="left_block">
                                    Assets Inspector
                                </div>
                            </div>


                            {assetsFromGraphQL.length ? <AssetsList
                                assetWrap="heightfixWrap"
                                TokenAssetsArray={assetsFromGraphQL}
                                NFTassetsArray={null}
                                handleClickNFT={() => console.log("token item")}
                                // showNFTdata={showNFTdata}
                                handleClickToken={(item) => handleSetAssetForDeploy(item)}
                            /> : null}

                        </div>
                    }
                />
            </div>
        </>
    )
}

export default AssetsListForDeploy;

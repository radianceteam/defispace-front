import React, {useState, useEffect} from 'react';
import './Stacking.scss';
import TON from '../../images/tokens/TON.svg';
import wBTC from '../../images/tokens/wBTC.svg';
import wETH from '../../images/tokens/wEth.svg';
import {useDispatch, useSelector} from "react-redux";
import MainBlock from "../../components/MainBlock/MainBlock";
import Input from "../../components/Input/Input";
import SwapBtn from "../../components/SwapBtn/SwapBtn";
import SwapConfirmPopup from "../../components/SwapConfirmPopup/SwapConfirmPopup";
import WaitingPopupConnect from "../../components/WaitingPopupConnect/WaitingPopupConnectConnect";
import WaitingPopup from "../../components/WaitingPopup/WaitingPopup";
import {
    Alert,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip, Container,
    Grid,
    Slider,
    Stack, TextField,
    Typography
} from "@material-ui/core";
import {ArrowUpward, CheckCircle, CheckCircleOutline, MoodBad} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {setStackingAmount, setStackingPeriod} from "../../store/actions/enterSeedPhrase";
import walletReducer from "../../store/reducers/wallet";
import {hideStackingConfirmPopup, openStackingConfirmPopup} from "../../store/actions/wallet";
import StackingConfirmPopup from "../../components/StackingConfirmPopup/StackingConfirmPopup";

function Stacking(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const marks = [
        {
            value: 0,
            label: '0m',
        },
        {
            value: 12,
            label: '12m',
        },
        {
            value: 24,
            label: '24m',
        },
        {
            value: 36,
            label: '36m',
        },
        {
            value: 48,
            label: '48m',
        },
    ];

    function valuetext(value) {
        return `${value}°C`;
    }

    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    const [period, setPeriod] = React.useState(12);

    const programs = [
        {name: "On demand", period: 0, apy: 6,id:0,info:"Daily"},
        {name: "Medium term", period: 12, apy: 11,id:1,info:"12 months"},
        {name: "Long term", period: 48, apy: 26,id:2,info:"48 months"},
    ]

    const [curProgram, setProgram] = React.useState(1);

    function onPeriodChange(event) {
        let curPeriod = Number(event.target.value);

        if (curPeriod === 0) setProgram(0)
        else if (curPeriod === 12) setProgram(1)
        else if (curPeriod === 24) setProgram(2)
        else if (curPeriod === 36) setProgram(2)
        else if (curPeriod === 48) setProgram(2)
        setPeriod(event.target.value);
        reCalc()
    }


    const [stake, setStake] = React.useState(1000)
    const [profit, setProfit] = React.useState(110)

    function reCalc() {
        let percent = programs[curProgram].apy || 0
        let profit = stake * (percent * 0.01)
        setProfit(profit);
    }

    function calculateButton(item) {
        setProgram(item.id)
        setPeriod(item.period)
        let percent = item.apy || 0
        let profit = stake * (percent * 0.01)
        setProfit(profit);

    }

    function onStakeChange(event) {
        let newStake = Number(event.target.value) || 0;
        if (newStake < 1) newStake = 0;
        let percent = programs[curProgram].apy || 0
        let profit = newStake * (percent * 0.01)
        setStake(newStake)
        setProfit(profit);
    }

    const [showConfirmPopup,setStackingConfirmPopup] = useState(false)
    function handlestake(show){

        const periodInSeconds = Number(period) * 30 * 60 * 60 * 24;
        const stakeInNanotons = Number(stake) * 1000000000

        dispatch(setStackingPeriod(periodInSeconds))
        dispatch(setStackingAmount(stakeInNanotons))

        console.log("periodInSeconds", periodInSeconds, "stakeInNanotons",stakeInNanotons)
        setStackingConfirmPopup(show)
    }
    return (
        <div className="container">
            {showConfirmPopup && <StackingConfirmPopup
                stake={stake}
                program={programs[curProgram]}
                profit={profit}
                hideConfirmPopup={() => dispatch(hideStackingConfirmPopup())}
            />}
            <MainBlock
                smallTitle={false}
                // centerTitle={true}
                classTitle="headerTitleFix"
                title={'Staking with TON Crystal'}
                content={
                    <div>
                        {/*<Stack spacing={2}>*/}
                        {/*    <div className="left_block" style={{fontWeight: "bold", color: "#41444E", justifyContent: "center"}}>*/}
                        {/*        Staking with TON Crystal*/}
                        {/*    </div>*/}

                            <div className="program_block_wrapper">
                                {/*<Grid item>*/}
                                <div className="program_item_wrapper_head">
                                    <div style={{fontWeight: "bold", "width": "38%",
                                        "marginLeft": "20px"}}>
                                        Program
                                    </div>
                                    <div style={{fontWeight: "bold", "width": "22%"}}>
                                        Term
                                    </div>
                                    <div style={{fontWeight: "bold", "width": "45%"}}>
                                        APY
                                    </div>

                                    {/*</CardContent>*/}

                                </div>
                                {programs.map(item => {
                                    return <div key={item.apy} className="program_item_wrapper">
                                            <Typography variant="h5" sx={{fontWeight: "bold"}} color="text.secondary" style={{"width": "27%"}}>
                                                {item.name}{item.period === 0 ? `` : `* `}
                                            </Typography>
                                            <Typography variant="h5" color="text.secondary" style={{"fontSize": "1.5rem"}}>
                                                {item.info}
                                            </Typography>
                                            <Typography variant="h5"  sx={{fontWeight: "bold"}} color="text.secondary" style={{"fontSize": "1.5rem"}}>
                                                ~{item.apy}%
                                            </Typography>
                                        {/*</CardContent>*/}
                                        <CardActions>
                                            <Button size="small"
                                                    onClick={() => calculateButton(item)}>Calculate</Button>
                                        </CardActions>
                                        </div>

                                })
                                }

                            </div>


                            <Box className="Stacking__calculator_box">
                                <Stack spacing={2} sx={{width: "95%"}}>
                                    <div className="mainblock-header mainblock-header--center">
                                        <h2 className="mainblock-title mainblock-title--small">Deposit calculator</h2>
                                    </div>

                                    <div>
                                        <div className="Stacking__calculator_deposit_term_text">
                                            Choose deposit term: {period} months
                                        </div>
                                        <Box sx={{width: "100%"}}>
                                            <Slider
                                                aria-label="Always visible"
                                                defaultValue={12}
                                                value={period}
                                                getAriaValueText={valuetext}
                                                onChange={onPeriodChange}
                                                step={12}
                                                max={48}
                                                marks={marks}
                                            />
                                        </Box>
                                    </div>

                                    <Stack spacing={2}>
                                        <Stack spacing={2} direction={"row"} sx={{justifyContent: "space-between"}}>
                                            <Grid item><Stack spacing={1}>
                                                <div className="Stacking__calculator_deposit_term_text">
                                                    Enter amount to stake
                                                </div>
                                                <TextField sx={{borderRadius: "12px"}} value={stake}
                                                           onChange={onStakeChange} id="stacking-amount"
                                                           label="Stake amount" size="small" variant="outlined"/>
                                            </Stack>
                                            </Grid>
                                            <Grid item><Stack spacing={1} sx={{alignItems: "flex-end"}}>
                                                <div className="Stacking__calculator_deposit_term_text end">
                                                    In {period}m you will have
                                                </div>
                                                <Stack spacing={1} direction={"row"}>
                                                    <Typography sx={{
                                                        fontWeight: "700",
                                                        fontSize: "24px",
                                                        lineHeight: "unset",
                                                        color: "#41444E"
                                                    }}>{Number(stake + profit).toFixed(1) || 0}</Typography>
                                                </Stack>

                                            </Stack>
                                            </Grid>
                                        </Stack>

                                        <Stack spacing={2} direction={"row"} sx={{justifyContent: "space-between"}}>
                                            <Grid item><Stack spacing={1}>
                                                <div className="Stacking__calculator_deposit_term_text">
                                                    Your profit
                                                </div>
                                                <Typography sx={{
                                                    fontWeight: "700",
                                                    fontSize: "24px",
                                                    lineHeight: "unset",
                                                    color: "#41444E"
                                                }}>{Number(profit).toFixed(1) || 0}</Typography>
                                            </Stack>
                                            </Grid>
                                            <Grid item><Stack spacing={1} sx={{alignItems: "flex-end"}}>
                                                <div className="Stacking__calculator_deposit_term_text end">
                                                    Annual Percentage Yield (APY)
                                                </div>
                                                <Stack spacing={1} direction={"row"}>
                                                    <Typography sx={{
                                                        fontWeight: "700",
                                                        fontSize: "24px",
                                                        lineHeight: "unset",
                                                        color: "#41444E"
                                                    }}>{programs[curProgram].apy || 0}%</Typography>
                                                </Stack>

                                            </Stack>
                                            </Grid>
                                        </Stack>
                                    </Stack>

                                    <Button
                                        sx={{borderRadius: "12px", boxShadow: "none", backgroundColor: "var(--accent)"}}
                                        variant={"contained"}
                                        onClick={()=>handlestake(true)}
                                    >

                                        Stake

                                    </Button>
                                </Stack>


                            </Box>
                            <Box style={{"marginTop":"20px"}}>
                                <Alert severity="info">*These deposits are TrueNFT-ready. You can use your deposit
                                    certificate as collateral to get liquidity before the end of term or simply sell it
                                    on auction.</Alert>
                            </Box>
                        {/*</Stack>*/}

                    </div>
                }
            />
            {showConfirmPopup &&
            <StackingConfirmPopup
            handleClose={(d)=>handlestake(d)}
            />}
        </div>
    )
}

export default Stacking;

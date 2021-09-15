import React, {useState, useEffect} from 'react';
import './Stacking.scss';
import {useDispatch, useSelector} from "react-redux";
import MainBlock from "../../components/MainBlock/MainBlock";
import {Alert, Box, Button, CardActions, Grid, Slider, Stack, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {setStackingAmount, setStackingPeriod, setAPYforStaking} from "../../store/actions/staking";
import {hideStackingConfirmPopup} from "../../store/actions/wallet";
import StackingConfirmPopup from "../../components/StackingConfirmPopup/StackingConfirmPopup";
import useAmountOverflowValidation from '../../hooks/useAmountOverflowValidation';

function Stacking(props) {
    const history = useHistory()
    const dispatch = useDispatch()

    const marks = [
        {
            value: 1,
            label: '1m',
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
    const clientData = useSelector(state => state.walletReducer.clientData);

    const [period, setPeriod] = React.useState(12);

    const programs = [
        {name: "On demand", period: 1/30, apy: 6,id:0,info:"Daily"},
        {name: "Medium term", period: 12, apy: 11,id:1,info:"12 months"},
        {name: "24 months", period: 24, apy: 16,id:7,info:"24 months"},
        {name: "36 months", period: 36, apy: 20,id:8,info:"36 months"},
        {name: "Long term", period: 48, apy: 26,id:2,info:"48 months"},
        {name: "One month", period: 1, apy: 8,id:9,info:"1 month"},
    ]

    const [curProgram, setProgram] = React.useState(1);

    function onPeriodChange(event) {
        let curPeriod = Number(event.target.value);
console.log("curPeriod",curPeriod)
        if (curPeriod === 0) setProgram(5)
        else if (curPeriod === 12) setProgram(1)
        else if (curPeriod === 24) setProgram(2)
        else if (curPeriod === 36) setProgram(3)
        else if (curPeriod === 48) setProgram(4)
        // else if (curPeriod === 1/30) setProgram(0)
        setPeriod(event.target.value);
        reCalc()
    }


    const [stake, setStake] = React.useState(1000);

    const { isValid, validate, VALIDATION_MSG } = useAmountOverflowValidation(stake);

    const [profit, setProfit] = React.useState(110);
    const [APY, setAPY] = React.useState(6);

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
        if(clientData.balance < Number(event.target.value))return
        let newStake = Number(event.target.value) || 0;
        if (newStake < 1) newStake = 0;
        let percent = programs[curProgram].apy || 0
        let profit = newStake * (percent * 0.01)
        setStake(newStake)
        setAPY(programs[curProgram].apy)
        setProfit(profit);

        validate(Number(event.target.value));
    }

    const [showConfirmPopup,setStackingConfirmPopup] = useState(false)
    function handlestake(show){
        if(clientData.balance < Number(stake))return

        let periodInSeconds = 0;
        if (period === 0) {
            periodInSeconds = 86400
        }else{
           periodInSeconds = Number(period)* 30 * 60 * 60 * 24;
        }

        const stakeInNanotons = Number(stake) * 1000000000

        dispatch(setStackingPeriod(periodInSeconds))
        dispatch(setStackingAmount(stakeInNanotons))
        dispatch(setAPYforStaking(APY))

        console.log("periodInSeconds", periodInSeconds, "stakeInNanotons",stakeInNanotons,"APY",APY)
        setStackingConfirmPopup(show)
    }

    return (
        <div className="container">
            {showConfirmPopup && <StackingConfirmPopup
                stake={stake}
                // duration={}
                program={programs[curProgram]}
                programName={programs[curProgram].name}
                profit={profit}
                hideConfirmPopup={() => dispatch(hideStackingConfirmPopup())}
            />}
            <MainBlock
                smallTitle={false}
                // centerTitle={true}
                classTitle="headerTitleFix"
                // title={'Staking with TON Crystal'}
                content={
                    <div>

                        <div className="head_wrapper">
                            <div className="left_block">
                                Staking with TON Crystal
                            </div>
                        </div>
                        <div className="program_block_wrapper">
                            {/*<Grid item>*/}
                            <div className="program_item_wrapper_head">
                                <div className={"Stacking__program"}>
                                    Program
                                </div>
                                <div className={"Stacking__term"}>
                                    Term
                                </div>
                                <div className={"Stacking__apy"}>
                                    APY
                                </div>
                                {/*</CardContent>*/}

                                </div>
                                {programs.filter(item=>item.id<4).map(item => {
                                    return <div key={item.apy} className="program_item_wrapper">
                                        <div className={"Stacking__program_data_block"}>
                                            <Typography variant="h5" className={"Staking__text program"} sx={{fontWeight: "bold"}} color="var(--primary-color)" style={{"width": "27%"}}>
                                                {item.name}{item.period === 0 ? `` : `* `}
                                            </Typography>
                                            <Typography variant="h5" className={"Staking__text term"} color="var(--primary-color)">
                                                {item.info}
                                            </Typography>
                                            <Typography variant="h5" className={"Staking__text apy"} sx={{fontWeight: "bold"}} color="var(--primary-color)">
                                                ~{item.apy}%
                                            </Typography>
                                        </div>
                                        {/*</CardContent>*/}
                                        <CardActions>
                                            <Button size="small"
                                                    disableRipple
                                                    sx={{
                                                        '&:hover': {
                                                            backgroundColor: programs[curProgram].name === item.name ? "rgba(53, 105, 240, 0.4)" :  "rgba(0, 31, 111, 0.85)",
                                                            color: programs[curProgram].name === item.name ? "#3569F0"  : "#F4F7FF",
                                                            boxShadow: 'none',
                                                        },
                                                        background: programs[curProgram].name === item.name ? "rgba(0, 31, 111, 0.85)" : "rgba(53, 105, 240, 0.4)",
                                                        border:  "none",
                                                        // height: "37px",
                                                        color: programs[curProgram].name === item.name ? "#F4F7FF" : "#3569F0",
                                                        borderRadius: "12px",
                                                        padding: "8px",
                                                        fontSize: "11px",
                                                        width: "92px",
                                                        height: "34px"
                                                    }}
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
                                            Choose deposit term: {period === 1/30 ? "1 day" : `${period} months`}
                                        </div>
                                        <Box sx={{width: "100%"}}>
                                            <Slider
                                                aria-label="Always visible"
                                                defaultValue={12}
                                                value={period}
                                                sx={{
                                                    color: "var(--accent)"
                                                }}
                                                componentsProps={{
                                                    markLabel: {
                                                        style: {
                                                            color: "var(--primary-color)"
                                                        }
                                                    }
                                                }}
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
                                            <TextField sx={{borderRadius: "12px"}}
                                                       value={stake}
                                                       inputProps={{
                                                           style: {
                                                               color: "var(--primary-color)"
                                                           }
                                                       }}
                                                       onChange={onStakeChange} id="stacking-amount"
                                                       size="small" variant="outlined"error={isValid}
                                                    helperText={isValid && VALIDATION_MSG}/>
                                        </Stack>
                                        </Grid>
                                        <Grid item><Stack spacing={1} sx={{alignItems: "flex-end"}}>
                                            <div className="Stacking__calculator_deposit_term_text end">
                                                In {period === 1/30 ? "1 day" : `${period} months`}m you will have
                                            </div>
                                            <Stack spacing={1} direction={"row"}>
                                                <Typography sx={{
                                                    fontWeight: "700",
                                                    fontSize: "24px",
                                                    lineHeight: "unset",
                                                    color: "var(--primary-color)"
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
                                                color: "var(--primary-color)"
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
                                                    color: "var(--primary-color)"
                                                }}>{programs[curProgram].apy || 0}%</Typography>
                                            </Stack>

                                        </Stack>
                                        </Grid>
                                    </Stack>
                                </Stack>
                                <button onClick={() => handlestake(true)} style={{borderRadius: "16px", height: "59px"}}
                                        className={"btn mainblock-btn"}>
                                    Stake
                                </button>

                            </Stack>


                        </Box>
                        <Box style={{"marginTop": "20px"}}>
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
                stake={stake}
                program={programs[curProgram]}
                programName={programs[curProgram].name}
                profit={profit}
                handleClose={(d) => handlestake(d)}
            />}
        </div>
    )
}

export default Stacking;

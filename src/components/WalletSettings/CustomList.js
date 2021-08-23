import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {FormControl} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            // width: '100%',
            border:"none",
            paddingLeft:"0px"
        },

    },
    select: {
        '& .MuiTextField-select': {
            fontSize: "36px"
        },

    },
    selectBorder:{
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red',
            border:"none",
            paddingLeft:"0px",
            width: '100%',
        }
    }
}));
export default function MultilineTextFields(props) {
    const [currency, setCurrency] = React.useState(props.networksArray[0].label);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const classes = useStyles();
    return (
        <FormControl style={{"width":"100%"}} noValidate autoComplete="off">

            {/*<div>*/}
                {/*<ThemeProvider theme={null}>*/}
                    <TextField
                        className={classes.selectBorder}
                        size={"large"}
                        // style={{"border": "none", "fontSize":"28px"}}
                        id="standard-select-currency"
                        select
                        value={currency}
                        onChange={handleChange}
                    >
                        {props.networksArray.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                {/*</ThemeProvider>*/}
            {/*</div>*/}

        </FormControl>
    );
}

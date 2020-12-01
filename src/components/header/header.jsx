import React from 'react';

import IPLogo from './assets/ipl.png';

import { Search } from '@material-ui/icons';
import {
    Button,
    ButtonGroup,
    Backdrop,
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    makeStyles,
    createStyles,
    Theme
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "../materialTheming/materialTheming";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            width: "100%",
            padding: "14px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "unset",
                gridTemplateRows: "auto auto",
            },
            "& .MuiInputBase-root": {
                borderRadius: "4px",
            },
            "& .MuiFilledInput-underline:before": {
                borderBottom: "none",
            },
        },
        headerBranding: {
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "auto 1fr"
        },
        brandingLogo: {
            height: "66px",
            [theme.breakpoints.down("sm")]: {
                height: "50px",
            }
        },
        pageName: {
            color: "#42FB81",
            fontSize: "30px",
            margin: "auto 0",
            [theme.breakpoints.down("sm")]: {
                fontSize: "24px",
            }
        },
        headerTools: {
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "1fr auto auto"
        },
        search: {
            width: "100%",
            marginLeft: "auto",
            maxWidth: "24pc",
        },
        filterTeam: {
            minWidth: "100px"
        },
        sort: {
            minWidth: "100px"
        }
    })
);

function Header() {
    const classes = useStyles();



    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.header}>
                <div className={classes.headerBranding}>
                    <img className={classes.brandingLogo} src={IPLogo} alt="Branding logo of IPL" />
                    <div className={classes.pageName}>Discover</div>
                </div>
                <div className={classes.headerTools}>
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="filled"
                        className={classes.search}
                        InputProps={{
                            endAdornment: (
                                <Search />
                            ),
                        }}
                    />
                    <FormControl variant="filled" className={classes.filterTeam}>
                        <InputLabel id="demo-simple-select-filled-label">Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={""}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" className={classes.sort}>
                        <InputLabel id="demo-simple-select-filled-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={""}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Header

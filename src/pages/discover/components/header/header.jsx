import React from 'react';
import { useHistory } from 'react-router-dom';

import IPLogo from './assets/ipl.png';

import { Search } from '@material-ui/icons';
import {
    TextField,
    MenuItem,
    Select,
    IconButton,
    FormControl,
    InputLabel,
    makeStyles,
    createStyles,
    Theme
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "../../../../components/materialTheming/materialTheming";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            width: "100%",
            padding: "14px",
            display: "grid",
            gridGap: "14px",
            gridTemplateColumns: "1fr 1fr",
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "unset",
                gridTemplateRows: "auto auto",
            },
            "& .MuiInputBase-root": {
                borderRadius: "4px",
            },
            "& .MuiFilledInput-underline:before": {
                borderBottom: "none !important",
            },
            "& .MuiFormLabel-filled": {
                color: "#42FB81",
            },
            "& .MuiFilledInput-root": {
                backgroundColor: "#2D363F !important",
                padding: 0
            },
        },
        headerBranding: {
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "auto 1fr",
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "unset",
                gridGap: "0",
                gridTemplateRows: "auto auto",
            }
        },
        brandingLogo: {
            height: "66px",
            [theme.breakpoints.down("sm")]: {
                height: "50px",
                margin: "auto"
            }
        },
        pageName: {
            color: "#42FB81",
            fontSize: "34px",
            margin: "auto 0",
            [theme.breakpoints.down("sm")]: {
                // fontSize: "24px",
                margin: "auto"
            }
        },
        headerTools: {
            height: "100%",
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "1fr auto",
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "unset",
                gridTemplateRows: "auto auto",
            }
        },
        search: {
            height: "100%",
            width: "100%",
            marginLeft: "auto",
            maxWidth: "27pc",
            [theme.breakpoints.down("sm")]: {
                maxWidth: "unset",
            }
        },
        filters: {
            height: "100%",
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "auto auto",
        },
        filterTeam: {
            height: "100%",
            minWidth: "80px"
        },
        sort: {
            height: "100%",
            minWidth: "90px"
        }
    })
);

function Header({ sortIDQuery, teamIDQuery }) {
    const classes = useStyles();
    const history = useHistory();

    const [sort, setSort] = React.useState(sortIDQuery),
        [teamID, setTeamID] = React.useState(teamIDQuery);

    if (!sort) setSort("auto");
    if (!teamID) setTeamID("1");
    // In case if there is no queries in the path then we automatically set it to default here

    React.useEffect(() => {
        let path = `/discover?teamID=${teamID}&sortID=${sort}`;

        history.push(path);
    }, [teamID, sort]);

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
                        autoComplete="off"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <Search />
                                </IconButton>
                            ),
                        }}
                    />
                    <div className={classes.filters}>
                        <FormControl variant="filled" className={classes.filterTeam}>
                            <InputLabel id="demo-simple-select-filled-label">Team</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={teamID}
                                onChange={(e) => setTeamID(e.target.value)}
                            >
                                <MenuItem value={1}>Chennai Super Kings</MenuItem>
                                <MenuItem value={3}>Delhi Capitals</MenuItem>
                                <MenuItem value={4}>Kings XI Punjab</MenuItem>
                                <MenuItem value={5}>Kolkata Knight Riders</MenuItem>
                                <MenuItem value={6}>Mumbai Indians</MenuItem>
                                <MenuItem value={8}>Rajasthan Royals</MenuItem>
                                <MenuItem value={9}>Royal Challengers Bangalore</MenuItem>
                                <MenuItem value={62}>Sunrisers Hyderabad</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="filled" className={classes.sort}>
                            <InputLabel id="demo-simple-select-filled-label">Sort</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <MenuItem value="auto">Auto</MenuItem>
                                <MenuItem value="alphabetical">Alphabetic</MenuItem>
                                <MenuItem value="mostrun">Most Runs</MenuItem>
                                <MenuItem value="mostmatches">Most Matches</MenuItem>
                                <MenuItem value="mostwickets">Most Wickets</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Header

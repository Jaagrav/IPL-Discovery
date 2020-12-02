import React from 'react'

import {
    Backdrop,
    makeStyles,
    createStyles,
    Theme
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "../../../../components/materialTheming/materialTheming";

import PlayerMoreInfo from "./playerMoreInfo";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
            backdropFilter: "blur(5px)",
        },
        playerCard: {
            background: "#222A32",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            borderRadius: 6,
            transition: ".3s",
            cursor: "pointer",
            "& img": {
                height: "220px",
                margin: "auto"
            },
            "& > *": {
                color: "white",
            },
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "unset",
                gridTemplateRows: "auto 1fr",
            },
            "&:hover": {
                background: "#2D363F",
                transform: "scale(0.95)",
            },
            "&:active": {
                transform: "scale(1)",
            }
        },
        playerInfo: {
            display: "grid",
            gridTemplateRows: "40px 20px 100px",
            textAlign: "center",
            margin: "auto",
            "& span, p": {
                margin: "4px",
            },
            paddingBottom: "13px"
        },
        playerName: {
            color: "#fff",
            fontSize: "30px",
            [theme.breakpoints.down("sm")]: {
                // fontSize: "17px"
            }
        },
        statsPreview: {
            height: "75px",
            display: "grid",
            margin: "20px auto",
            gridGap: "10px",
            gridTemplateColumns: "repeat(3, 75px)",
        },
        year: {
            letterSpacing: 7,
            color: "#42FB81",
            fontSize: "12px"
        },
        stats: {
            display: "grid",
            gridTemplateRows: "auto auto",
            padding: "12px",
            background: "#192128",
            "& p": {
                fontSize: 10,
                margin: "auto",
            },
            "& span": {
                fontSize: 18,
            },
            borderRadius: "5px",
        },
        showmorebtn: {
            height: "fit-content",
            width: "fit-content",
        }
    })
);

function PlayerCard({ playerInfo, stats }) {
    const classes = useStyles();
    const [showMorePlayerInfo, setShowMorePlayerInfo] = React.useState(false);

    try {
        const { fullName, id } = playerInfo;
        const { m, r } = stats.battingStats;
        const { w } = stats.bowlingStats;

        return (
            <ThemeProvider theme={darkTheme}>
                <Backdrop
                    className={classes.backdrop}
                    open={showMorePlayerInfo}
                    onClick={() => { setShowMorePlayerInfo(false); }}
                >
                    <PlayerMoreInfo playerInfo={playerInfo} />
                </Backdrop>
                <div className={classes.playerCard} onClick={() => { setShowMorePlayerInfo(true); }}>
                    <img alt={fullName} src={`https://static.iplt20.com/players/210/${id}.png`} />
                    <div className={classes.playerInfo}>
                        <span className={classes.playerName}>{fullName}</span>
                        <p className={classes.year}>IPL{new Date().getFullYear()}</p>
                        <div className={classes.statsPreview}>
                            <div className={classes.stats}>
                                <span>{m}</span>
                                <p>Matches</p>
                            </div>
                            <div className={classes.stats}>
                                <span>{r}</span>
                                <p>Runs</p>
                            </div>
                            <div className={classes.stats}>
                                <span>{w}</span>
                                <p>Wickets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        )
    } catch (e) {
        return (<></>);
    }//This prevents app from crashing due to an error that occurs when the API gives insufficient/incomplete data
}

export default PlayerCard;

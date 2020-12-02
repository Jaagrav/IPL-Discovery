import React from 'react';

import {
    makeStyles,
    createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        playerMoreInfo: {
            background: "#222A32",
            maxWidth: "50pc",
            maxHeight: "40pc",
            borderRadius: "5px",
            display: "grid",
            gridTemplateColumns: "291px 1fr",
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "unset",
                gridTemplateRows: "291px 1fr",
                width: "100%",
                maxWidth: "100%",
            }
        },
        playerInfo: {
            padding: "20px 30px 20px 0",
            [theme.breakpoints.down("sm")]: {
                padding: "20px 30px",
                textAlign: "center",
            }
        },
        playerName: {
            fontSize: 44,
            "& > *": {
                margin: 0
            }
        },
        lastName: {
            color: "#42FB81",
        },
        playerOtherInfo: {
            marginTop: 20,

        },
        playerIMG: {
            height: "100%",
            margin: "auto",
        }
    })
);

function PlayerMoreInfo({ playerInfo }) {
    const classes = useStyles();

    const { dateOfBirth, fullName, id, nationality, rightArmedBowl, rightHandedBat, shortName } = playerInfo;

    const firstName = fullName.substring(0, fullName.lastIndexOf(" ")), lastName = fullName.substring(fullName.lastIndexOf(" "));

    let dateArray = new Date(dateOfBirth).toDateString().split(" ");
    const date = `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;

    return (
        <div className={classes.playerMoreInfo} onClick={(e) => { e.stopPropagation(); }}>
            <img alt={fullName} src={`https://static.iplt20.com/players/210/${id}.png`} className={classes.playerIMG} />
            <div className={classes.playerInfo}>
                <div className={classes.playerName}>
                    <span className={classes.firstName}>{firstName}</span>
                    <span className={classes.lastName}>{lastName}</span>
                </div>
                <div className={classes.playerOtherInfo}>
                    <p>DOB: {date}</p>
                    <p>Nationality: {nationality}</p>
                    <p>Bowling Arm: {rightArmedBowl ? "Right" : "Left"}</p>
                    <p>Batting Hand: {rightHandedBat ? "Right" : "Left"}</p>
                    <p>Short Name: {shortName}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerMoreInfo

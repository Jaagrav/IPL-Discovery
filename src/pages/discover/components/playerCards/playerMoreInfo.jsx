import React from 'react';

import {
    IconButton,

    makeStyles,
    createStyles,
    Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        playerMoreInfo: {
            background: "#222A32",
            maxWidth: "50pc",
            maxHeight: "40pc",
            borderRadius: "5px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
        },
        playerInfo: {
            padding: "20px 30px 20px 0",
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

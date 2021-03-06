import React from 'react';

import { useLocation } from "react-router-dom";

import Header from './components/header/header';

import axios from 'axios';

import {
  CircularProgress,
  Backdrop,
  makeStyles,
  createStyles
} from "@material-ui/core";

import PlayerCard from './components/playerCards/playerCard';
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme } from "../../components/materialTheming/materialTheming";

import { sortAlphabetically, sortMostRun, sortMostMatches, sortMostWickets } from "./components/SortingMethods";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
      backdropFilter: "blur(5px)",
    },
    playerCards: {
      margin: "0 12px",
      display: 'grid',
      gridGap: "10px",
      gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      }
    },
    footer: {
      padding: 20,
      marginTop: 10,
      textAlign: "center",
      background: "#222A32",
      color: "#42FB81",
      letterSpacing: 7,
    }
  })
);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Discover() {
  const classes = useStyles();
  let query = useQuery();
  const [searching, setSearching] = React.useState("");

  const [loading, setLoading] = React.useState(true);
  const [forceRerender, setForceRerender] = React.useState(true);
  const [playerCardInfo, setPlayerCardInfo] = React.useState([{
    player: {},
    stats: [{}]
  }]);

  React.useEffect(() => {
    setForceRerender(!forceRerender);
    setLoading(true);
  }, [window.location.href]);//Change the value of ForceRerender in order to apply the filters and sorts

  React.useEffect(() => {
    var config = {
      method: 'get',
      url: `https://cricketapi.platform.iplt20.com/stats/players?teamIds=${query.get("teamID")}&tournamentIds=18790&scope=TOURNAMENT&pageSize=30`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        switch (query.get("sortID")) {
          case "alphabetical":
            setPlayerCardInfo(sortAlphabetically(response.data.stats.content));
            break;
          case "mostrun":
            setPlayerCardInfo(sortMostRun(response.data.stats.content));
            break;
          case "mostmatches":
            setPlayerCardInfo(sortMostMatches(response.data.stats.content));
            break;
          case "mostwickets":
            setPlayerCardInfo(sortMostWickets(response.data.stats.content));
            break;
          default:
            console.log("Sorting by default");
            setPlayerCardInfo(response.data.stats.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [forceRerender]);

  return (
    <div className={classes.discoverPage}>
      <ThemeProvider theme={darkTheme}>
        <Backdrop
          className={classes.backdrop}
          open={loading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      </ThemeProvider>
      <Header teamIDQuery={query.get("teamID")} sortIDQuery={query.get("sortID")} setSearching={setSearching} />
      <div className={classes.playerCards}>
        {
          playerCardInfo.map((item, index) => (
            <PlayerCard key={item.player.id} playerInfo={item.player} stats={item.stats[0]} searching={searching} index={index} />
          ))
        }
      </div>
      <div className={classes.footer}>©IPL2020</div>
    </div>
  );
}

export default Discover;

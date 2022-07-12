import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Game from "../Game/Game";
import { gamesOptions, fetchData } from "../../utils/fetchData";

const ListOfGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    let gamesData = [];
    const fetchGamesData = async () => {
      gamesData = await fetchData(
        `https://rawg-video-games-database.p.rapidapi.com/games?key=${process.env.REACT_APP_RAWG_API_KEY}`,
        gamesOptions
      );
      setGames(gamesData.results);
      //   console.log(gamesData);
    };
    fetchGamesData();
  }, []);

  return (
    <Grid container sx={{ margin: "0 10px" }}>
      {Array.from(games).map((game, id) => (
        <Game game={game} key={id} />
      ))}
    </Grid>
  );
};

export default ListOfGames;

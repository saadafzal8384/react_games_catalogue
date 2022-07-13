import { Box, Chip, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gamesOptions, fetchData } from "../../utils/fetchData";

const GameInformation = () => {
  const { id } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    let gamesData = [];
    const fetchGameData = async () => {
      gamesData = await fetchData(
        `https://rawg-video-games-database.p.rapidapi.com/games/${id}?key=${process.env.REACT_APP_RAWG_API_KEY}`,
        gamesOptions
      );
      setGame(gamesData);
      console.log(gamesData);
    };
    fetchGameData();
  }, []);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        sx={{ padding: "2rem", height: "90vh" }}
      >
        <img
          src={game?.background_image}
          width="100%"
          height="100%"
          alt="Game Banner"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={8}>
        <Typography variant="h3" gutterBottom m={2}>
          {game?.name}
        </Typography>
        <Typography variant="body1" gutterBottom align="justify" m={2}>
          {game?.description_raw}
        </Typography>
        <Typography variant="h6" gutterBottom align="justify" m={2}>
          Developers:{" "}
          {game?.developers.slice(0, 1).map((developer, id) => (
            <Chip
              sx={{ background: "orange", color: "#000", fontWeight: "bold" }}
              key={id}
              label={developer.name}
            />
          ))}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="justify"
          sx={{ marginTop: "10px" }}
          m={2}
        >
          Genres :{" "}
          {game?.genres.slice(0, 3).map((genre, id) => (
            <Chip
              sx={{ background: "green", color: "#FFF", marginRight: "10px" }}
              key={id}
              label={genre.name}
            />
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GameInformation;

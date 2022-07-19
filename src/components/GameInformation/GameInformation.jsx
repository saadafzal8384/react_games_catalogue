import { Box, Chip, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gamesOptions, fetchData } from "../../utils/fetchData";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import RedditIcon from "@mui/icons-material/Reddit";
import GradeIcon from "@mui/icons-material/Grade";
import LanguageIcon from "@mui/icons-material/Language";

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
  }, [id]);

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
        <Stack direction="row" spacing={2} sx={{ marginLeft: "1rem" }}>
          <Button
            variant="contained"
            color="success"
            endIcon={<AccessTimeFilledIcon />}
          >
            {game?.playtime} Hours
          </Button>
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferr"
            color="info"
            href={game?.reddit_url}
            endIcon={<GradeIcon />}
          >
            {`${game?.rating} / ${game?.rating_top}`}
          </Button>
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferr"
            color="error"
            href={game?.reddit_url}
            endIcon={<RedditIcon />}
          >
            {game?.reddit_name}
          </Button>
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferr"
            color="error"
            href={game?.website}
            endIcon={<LanguageIcon />}
          >
            Website
          </Button>
        </Stack>
        {/* <Typography variant="subtitle1" gutterBottom align="justify" m={2}>
          &nbsp;Playtime :&nbsp; {game?.playtime} Hours
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="justify" m={2}>
          &nbsp;Playtime :&nbsp; {game?.playtime} Hours
        </Typography> */}
      </Grid>
    </Grid>
  );
};

export default GameInformation;

import React, { useState, useEffect } from "react";
import { Chip, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { gamesOptions, fetchData } from "../../utils/fetchData";
import Button from "@mui/material/Button";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import RedditIcon from "@mui/icons-material/Reddit";
import GradeIcon from "@mui/icons-material/Grade";
import LanguageIcon from "@mui/icons-material/Language";
import Platforms from "./Platforms";
import Stores from "./Stores";

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
      console.log(game);
    };
    fetchGameData();
  }, [id, game]);

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
      <Grid container item xs={12} md={6} spacing={2} mb={2}>
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
            {game?.playtime} Hrs Playtime
          </Button>
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferr"
            color="info"
            endIcon={<GradeIcon />}
          >
            {`${game?.rating} / ${game?.rating_top}`}
          </Button>
          {game?.reddit_url && (
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
          )}
          {game?.website && (
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
          )}
        </Stack>
        <Typography variant="h6" gutterBottom align="justify" m={2}>
          Developers:{" "}
          {game?.developers &&
            game?.developers.slice(0, 1).map((developer, id) => (
              <Chip
                sx={{
                  background: "orange",
                  color: "#000",
                  fontWeight: "bold",
                }}
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
          {game?.genres &&
            game?.genres.slice(0, 3).map((genre, id) => (
              <Chip
                sx={{
                  background: "green",
                  color: "#FFF",
                  marginRight: "10px",
                }}
                key={id}
                label={genre.name}
              />
            ))}
        </Typography>
        <Platforms game={game} />
        <Stores game={game} />
      </Grid>
    </Grid>
  );
};

export default GameInformation;

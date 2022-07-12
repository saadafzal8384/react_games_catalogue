import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Game = ({ game }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{ margin: "2rem 0" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={game?.background_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game?.name}
          </Typography>
          <Stack direction="row" spacing={1}>
            {game?.genres.slice(0, 3).map((genre, id) => (
              <Chip key={id} label={genre.name} />
            ))}
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" endIcon={<VisibilityIcon />}>
            View Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Game;

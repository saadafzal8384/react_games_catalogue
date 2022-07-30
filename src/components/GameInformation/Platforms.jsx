import {
  Avatar,
  AvatarGroup,
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import GamesIcon from "@mui/icons-material/Games";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const Platforms = ({ game }) => {
  return (
    <Grid item xs={12} md={6}>
      <Button
        variant="contained"
        target="_blank"
        rel="noopener noreferr"
        color="success"
        endIcon={<SportsEsportsIcon />}
      >
        Available Platforms
      </Button>
      <Grid item xs={12}>
        <AvatarGroup max={3} sx={{ float: "left", margin: "2rem 0rem" }}>
          <Avatar
            alt="PC"
            src="https://www.freeiconspng.com/thumbs/windows-icon-png/cute-ball-windows-icon-png-16.png"
            height="16px"
            width="16px"
          />
          <Avatar
            alt="PC"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
            height="16"
            width="16"
          />
          <Avatar
            alt="PC"
            src="https://w7.pngwing.com/pngs/636/561/png-transparent-playstation-4-hidden-agenda-playstation-app-play-station-4-blue-angle-text-thumbnail.png"
            height="16"
            width="16"
          />
        </AvatarGroup>
      </Grid>

      <List>
        {game?.platforms &&
          game?.platforms.map((game, id) => (
            <ListItem key={id}>
              <ListItemAvatar>
                <Avatar>
                  <GamesIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={game?.platform?.name} />
            </ListItem>
          ))}
      </List>
    </Grid>
  );
};

export default Platforms;

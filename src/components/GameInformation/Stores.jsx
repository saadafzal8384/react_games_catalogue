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
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Stores = ({ game }) => {
  return (
    <Grid item xs={12} md={6}>
      <Button
        variant="contained"
        target="_blank"
        rel="noopener noreferr"
        color="warning"
        endIcon={<LocalMallIcon />}
      >
        AVAILABLE STORES
      </Button>

      <Grid item xs={12}>
        <AvatarGroup max={3} sx={{ float: "left", margin: "2rem 0rem" }}>
          <Avatar
            alt="Steam"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/640px-Steam_icon_logo.svg.png"
            height="16px"
            width="16px"
          />
          <Avatar
            alt="Epic Games"
            src="https://www.nicepng.com/png/detail/101-1010467_epic-games-filled-icon-epic-games.png"
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
        {game?.stores &&
          game?.stores.map((game, id) => (
            <ListItem
              key={id}
              button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://${game?.store?.domain}`}
            >
              <ListItemAvatar>
                <Avatar>
                  <GamesIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={game?.store?.name} />
            </ListItem>
          ))}
      </List>
    </Grid>
  );
};

export default Stores;

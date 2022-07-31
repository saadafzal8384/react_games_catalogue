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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import LanguageIcon from "@mui/icons-material/Language";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "orange",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Store</StyledTableCell>
              <StyledTableCell align="right">Website</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {game?.stores &&
              game?.stores.map((game, id) => (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {game?.store?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://${game?.store?.domain}`}
                      color="warning"
                    >
                      Visit
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Stores;

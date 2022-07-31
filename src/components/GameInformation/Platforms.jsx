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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "green",
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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

      {/* <List>
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
      </List> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Platform</StyledTableCell>
              <StyledTableCell align="right">Available</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {game?.platforms &&
              game?.platforms.map((game, id) => (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {game?.platform?.name}
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    sx={{ color: "green", fontWeight: "bold" }}
                  >
                    Yes
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Platforms;

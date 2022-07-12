import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import ListOfGames from "../components/ListOfGames/ListOfGames";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ListOfGames />
    </Box>
  );
};

export default Home;

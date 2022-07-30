import { Box } from "@mui/material";
import React from "react";
import Categories from "../components/Categories/Categories";
import HeroBanner from "../components/HeroBanner";
import ListOfGames from "../components/ListOfGames/ListOfGames";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ListOfGames />
      <Categories />
    </Box>
  );
};

export default Home;

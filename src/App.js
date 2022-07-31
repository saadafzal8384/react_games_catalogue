import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import GameInformation from "./components/GameInformation/GameInformation";
import GamesByCategories from "./pages/GamesByCategories";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "100%" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameInformation />} />
        <Route path="/category/:id" element={<GamesByCategories />} />
      </Routes>
    </Box>
  );
}

export default App;

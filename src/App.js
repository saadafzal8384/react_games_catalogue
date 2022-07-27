import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import GameInformation from "./components/GameInformation/GameInformation";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "100%" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameInformation />} />
      </Routes>
    </Box>
  );
}

export default App;

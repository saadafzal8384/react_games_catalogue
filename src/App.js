import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "100%" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;

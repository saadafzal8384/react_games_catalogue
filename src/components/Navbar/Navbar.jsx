import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

// import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src="https://www.crytek.com/frontend/18175579678cd3d82a1aa478a520d250-600.png"
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#FFF",
            borderBottom: "3px solid orange",
          }}
        >
          Home
        </Link>
        <a href="#categories" style={{ textDecoration: "none", color: "#FFF" }}>
          Categories
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;

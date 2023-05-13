import React from "react";
import aukLogo from "./../../assets/auk-logo.png";
import mssnLogo from "./../../assets/mssn-auk.png";
import "./Navbar.css";
import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06)",
        p: 2,
        background:
          "linear-gradient(43deg, rgba(34,186,50,1) 0%, rgba(240,202,143,1) 100%)",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
      className="navbar">
      <div className="logo">
        <img src={aukLogo} alt="auk logo" />
      </div>
      <div className="text">
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Welcome to MSSN Portal
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
          Make Payment and Verify your Registration
        </Typography>
      </div>
      <div className="logo">
        <img src={mssnLogo} alt="mssn logo" />
      </div>
    </Box>
  );
};

export default Navbar;

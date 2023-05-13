import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";

const Reciept = () => {
  return (
    <div className="reciept">
      <Navbar />
      <Box>
        <Paper>
          <Typography variant="body1" component="h2">
            MSSN Payment Reciept
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Reciept;

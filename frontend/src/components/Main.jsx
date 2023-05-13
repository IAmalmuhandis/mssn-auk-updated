import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./navbar/Navbar";
import Form from "./form/Form";

function Main() {
  return (
    <div>
      <Navbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}>
        <Grid item>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;

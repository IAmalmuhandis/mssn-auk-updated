import React, { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    if (name === undefined || name === "" || name === null) {
      setError("Name field is required");
      return false;
    }
    if (regNo === undefined || regNo === "" || regNo === null) {
      setError("Registration number field is required");
      return false;
    }
    if (department === undefined || department === "" || department === null) {
      setError("Department field is required");
      return false;
    }
    if (level === undefined || level === "" || level === null) {
      setError("Level field is required");
      return false;
    }
    if (phone === undefined || phone === "" || phone === null) {
      setError("Phone field is required");
      return false;
    }
    console.log(name, regNo, department, level, phone);
  };
  return (
    <Paper
      sx={{ maxWidth: 500, borderRadius: 2, marginTop: 10, marginBottom: 10 }}
      elevation={5}>
      <Grid container gap={2} p={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}>
          <Typography variant="h4" sx={{ m: 1, p: 1 }}>
            <b>Student Details</b>
          </Typography>
          {error && <Typography sx={{ fontSize: 16, color: "red" }}>
            {error}
          </Typography>}
        </Box>
        <Grid item xs={12}>
          <TextField
            required
            label="Name"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5.78}>
          <TextField
            required
            label="Registration Number"
            onChange={(e) => setRegNo(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5.78}>
          <TextField
            required
            label="Department"
            onChange={(e) => setDepartment(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5.78}>
          <TextField
            required
            label="Level"
            onChange={(e) => setLevel(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5.78}>
          <TextField
            required
            label="Phone number"
            onChange={(e) => setPhone(e.target.value)}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Typography variant="body2" component="h4">
          Amount: <b> ₦ 500</b>
        </Typography>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              background:
                "linear-gradient(43deg, rgba(34,186,50,1) 0%, rgba(240,202,143,1) 100%)",
              fontWeight: "bold",
              color: "black",
            }}
            onClick={handleSubmit}>
            Pay
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;

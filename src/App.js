import React from "react";
import { UserList } from "./components/UserList";
import { Grid, TextField } from "@mui/material";

function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>USER LIST</h2>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <TextField
            variant="outlined"
            label="Search"
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8}>
          <UserList />
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default App;

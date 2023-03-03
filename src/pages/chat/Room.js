import React from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const Room = () => {
  return (
    <>
      <Paper
        sx={{
          height: 150,
          width: 600,
          margin: 5,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginLeft: 25 }}>
              {" "}
              Room
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              marginLeft: 10,
            }}
          >
            <TextField label="Room name" />
          </Grid>
          <Grid item xs={2.5}>
            <Button variant="contained" size="large">
              Join
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Room;

import React, { useState } from "react";
import { Typography, Button, Grid, FormLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Room = () => {
  const [room, setRoom] = useState("");

  const handleChange = (event) => {
    console.log("value=", event.target.value);
    setRoom(event.target.value);
  };
  return (
    <>
      <Paper
        sx={{
          height: 200,
          width: 500,
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
            xs={5}
            sx={{
              marginLeft: 10,
            }}
          >
            {/* <TextField label="Room name" /> */}
            <FormControl fullWidth>
              <FormLabel>Room</FormLabel>
              <Select
                value={room}
                onChange={(event) => {
                  handleChange(event);
                }}
              >
                <MenuItem value={"room1"}>Room 1</MenuItem>
                <MenuItem value={"room2"}>Room 2</MenuItem>
                <MenuItem value={"room3"}>Room 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2.5} sx={{ marginTop: 3.6, marginLeft: 2 }}>
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

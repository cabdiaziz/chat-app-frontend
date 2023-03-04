import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  FormLabel,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import { io } from "socket.io-client";
import { Message, Room } from "./";
import { useSelector } from "react-redux";

const socket = io("http://localhost:7000");

socket.on("connect", () => {
  console.log("Connected to Socket.io...!"); // connected to the server as client.
  <Typography>user connected</Typography>;
});

socket.on("newMsg", (message) => {
  console.log("listedData: ", message);
});

const Chat = () => {
  const { user } = useSelector((state) => state.user);
  const [room, setRoom] = useState("");

  const handleChange = (event) => {
    console.log("value=", event.target.value);
    setRoom(event.target.value);
  };
  console.log("test-user = ", user.email);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <Typography variant="h3">Live Chat</Typography>
          {/* <Room /> */}
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
          <Message room={room} socket={socket} />
        </Box>
      </Box>
    </>
  );
};

export default Chat;

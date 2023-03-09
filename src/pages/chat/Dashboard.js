import React, { useState, useCallback, useRef } from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  FormLabel,
  Paper,
  TextField,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Message } from "./";
import { io } from "socket.io-client";
const socket = io("http://localhost:7000");
// const socket = io.connect("http://localhost:7000");

// client-side
socket.on("connect", () => {
  console.log("Client Connected : ", socket.id); // random id every refresh
  socket.on("receiveMessage", (message) => {
    console.log("received data", message);
  });
});

const Dashboard = () => {
  const [room, setRoom] = useState("");
  const roomRef = useRef(null);

  const joinRoom = () => {
    const roomValue = roomRef.current.value;
    setRoom(roomValue);
    console.log("room ==", roomRef.current.value);
    if (room !== "") {
      socket.emit("joinRoom", room);
    }
  };

  // const handleJoinRoom = useCallback((event) => {
  //   setRoom(event.target.value);
  // }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <Typography variant="h3">Live Chat</Typography>

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
                <FormLabel>Room</FormLabel>
                <TextField inputRef={roomRef} style={{ width: 250 }} />
              </Grid>
              <Grid item xs={2} sx={{ marginTop: 3.6, marginLeft: 7 }}>
                <Button onClick={joinRoom} variant="contained" size="large">
                  Join
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Message currentRoom={room} socket={socket} />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

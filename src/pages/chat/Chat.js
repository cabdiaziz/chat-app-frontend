import React from "react";
import { Typography, Box, TextField, Button, Grid, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Sidebar from "../components/Sidebar";
import { io } from "socket.io-client";

let token = localStorage.getItem("token");

const socket = io("http://localhost:7000", {
  extraHeaders: {
    token: token,
  },
});

socket.on("connect", () => {
  console.log("Connected to Socket.io...!"); // connected to the server as client.
  <Typography>user connected</Typography>;
});

socket.on("newMsg", (message) => {
  console.log("listedData: ", message);
});
const Chat = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
          <Typography variant="h3">Chat Room</Typography>
          <Typography variant="h4"> Room</Typography>

          <Stack spacing={15}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <TextField label="Room name..." />
              </Grid>
              <Grid item xs={1.2}>
                <Button variant="contained">Create a room</Button>
              </Grid>
              <Grid item xs={1}>
                <Button variant="contained">Join a room</Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h4"> Message</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField label="Message..." multiline maxRows={3} />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Stack>

          {/* <Divider /> */}
          {/* <Typography variant="h4"> Message</Typography>
          <Stack spacing={2}>
            <Grid container>
              <Grid item xs={2}>
                <TextField label="Message..." multiline maxRows={3} />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Stack> */}
        </Box>
      </Box>
    </>
  );
};

export default Chat;

import React from "react";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Sidebar from "../components/Sidebar";
import { io } from "socket.io-client";
import { Message } from "./";

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
          {/* Room paper */}
          <Paper
            sx={{
              height: 200,
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
                  create
                </Button>
              </Grid>

              <Grid item xs={1}>
                <Paper
                  sx={{
                    height: 200,
                    width: 500,
                    marginLeft: 30,
                    marginTop: -7,
                    overflowY: "scroll",
                  }}
                >
                  Room List
                  <Grid item xs={1}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        marginLeft: 50,
                        marginTop: 15,
                      }}
                    >
                      Join
                    </Button>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          <Message />
        </Box>
      </Box>
    </>
  );
};

export default Chat;

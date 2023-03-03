import React from "react";
import { Typography, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { io } from "socket.io-client";
import { Message, Room } from "./";

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
          <Room />
          <Message />
        </Box>
      </Box>
    </>
  );
};

export default Chat;

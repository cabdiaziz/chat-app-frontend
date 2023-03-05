import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import { saveMessage, getAllMessages } from "../../redux/thunk/messageThunk";
import { useDispatch } from "react-redux";

const Message = ({ room, socket, email }) => {
  const [message, setMsg] = useState("");
  const [messageList, setMessageList] = useState([]);
  const dispatch = useDispatch();

  const sendMsg = async () => {
    if (message !== "" && room !== "") {
      const msgData = {
        message,
        room,
        email,
      };
      const reqData = {
        userToken: localStorage.getItem("token"),
        data: msgData,
      };

      dispatch(saveMessage(reqData));
      await socket.emit("sendMsg", msgData);

      setMessageList((list) => [...list, msgData]);
      setMsg("");
    }
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [dispatch, socket]);

  return (
    <>
      <Paper
        sx={{
          height: 440,
          width: 600,
          marginLeft: 5,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginLeft: 25 }}>
              {" "}
              Message
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                height: 300,
                width: 400,
                marginLeft: 10,
                overflowY: "scroll",
              }}
            >
              {messageList.map((content, i) => {
                return (
                  <div key={i}>
                    <Typography
                      style={{
                        alignItems: "center",
                        backgroundColor: "#A8DDFD",
                        position: "relative",
                        marginLeft: "5px",
                        marginBottom: "10px",
                        padding: "10px",
                        width: "60%",
                      }}
                    >
                      {content.message}
                    </Typography>
                  </div>
                );
              })}
            </Paper>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              marginLeft: 10,
            }}
          >
            <TextField
              label="Message..."
              value={message}
              onChange={(event) => {
                setMsg(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMsg();
              }}
              style={{ width: 300 }}
            />
          </Grid>
          <Grid item xs={2.5} style={{ marginLeft: 120, marginTop: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                sendMsg();
              }}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Message;

import React, { useState, useEffect, useRef } from "react";
import { Typography, TextField, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import { saveMessage } from "../../redux/thunk/messageThunk";
import { useDispatch, useSelector } from "react-redux";

const Message = ({ currentRoom, socket }) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef(null);
  // const [currentMsg, setMsg] = useState("");

  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messages);
  console.log("state==", messages);

  const sendMsg = async () => {
    const messageValue = messageRef.current.value;
    console.log("rom=", currentRoom);
    if (messageValue !== "" && currentRoom !== "") {
      const msgData = {
        message: messageValue,
        room: currentRoom,
      };
      console.log("send = ", msgData);
      const reqData = {
        userToken: localStorage.getItem("token"),
        data: msgData,
      };
      await socket.emit("sendMsg", msgData);
      dispatch(saveMessage(reqData));

      setMessageList((list) => [...list, msgData]);
      messageRef.current.value = "";
    }
  };

  // setMessageList((list) => [...list,]); // to read all old chats.
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      console.log("receiveMessage == ", message);
      setMessageList((list) => [...list, message]);
      const reqData = {
        userToken: localStorage.getItem("token"),
        data: message,
      };
      dispatch(saveMessage(reqData));
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
              inputRef={messageRef}
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

export default React.memo(Message);

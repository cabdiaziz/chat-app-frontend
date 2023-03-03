import React from "react";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";

const Message = () => {
  return (
    <>
      <Paper
        sx={{
          height: 450,
          width: 600,
          margin: 5,
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
              <p>Conversation here...</p>
            </Paper>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              marginLeft: 10,
            }}
          >
            <TextField label="Message..." />
          </Grid>
          <Grid item xs={2.5}>
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Message;

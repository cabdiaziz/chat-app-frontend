import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  CssBaseline,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUser } from "../../redux/thunk/userThunk.js";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const theme = createTheme();
let userData = null;

const Signup = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const user = {
      name: userData.displayName,
      email: userData.email,
      uid: userData.uid,
    };

    const result = await dispatch(createUser(user));
    if (result.type === "user/createUser/fulfilled") {
      if (result.payload === 401) {
        alert("Signup Failed");
      } else {
        alert("Signup Successful");
      }
    } else if (result.type === "user/createUser/rejected") {
      alert("OAuth Rejected");
    }
  };

  const SignUpFirebase = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        userData = user;

        handleSubmit();
      })
      .catch((error) => {
        return error.message;
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Real Chat Application
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "grey" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SignUp
          </Typography>

          <Box component="form" sx={{ mt: 1 }}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<GoogleIcon />}
              onClick={() => {
                SignUpFirebase();
              }}
            >
              SIGNUP With Google
            </Button>

            <Grid container>
              <Grid item>
                {"I already have an account!"}
                <Link to="/" variant="body2">
                  {" Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;

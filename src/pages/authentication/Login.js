import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  CssBaseline,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { loginUser } from "../../redux/thunk/userThunk";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const theme = createTheme();
let userToken = null;

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const requestData = {
      authToken: userToken,
    };

    const result = await dispatch(loginUser(requestData));

    if (result.type === "user/loginUser/fulfilled") {
      if (result.payload === 401) {
        console.log("you are not registered");
      } else {
        localStorage.setItem("token", userToken);
        console.log("login successful");
        navigate("/dashboard");
      }
    } else if (result.type === "user/loginUser/rejected") {
      alert(result.payload.error.message);
    }
  };

  const loginFirebase = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        userToken = user.accessToken;
        handleSubmit();
      })
      .catch((error) => {
        return error;
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
            Login
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<GoogleIcon />}
              onClick={() => {
                loginFirebase();
              }}
            >
              Login With Google
            </Button>

            <Grid container>
              <Grid item>
                {"Don't have an account? "}
                <Link to="/signup" variant="body2">
                  {"SignUp"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

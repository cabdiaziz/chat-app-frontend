import React from "react";
import { Container, Box, Button, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/thunk/userThunk";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

let userToken = null;

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const requestData = {
      authToken: userToken,
    };

    const result = await dispatch(loginUser(requestData));

    if (result.type === "user/loginUser/fulfilled") {
      if (result.payload === 401) {
        alert("You are not registered");
      } else {
        alert("login successful");
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
    <Container maxWidth="sm" className="form" align="center">
      <h3>Login</h3>
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
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;

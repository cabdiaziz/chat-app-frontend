import React from "react";
import { Link } from "react-router-dom";
import img from "../images/404.png";
import { Container } from "@mui/material";
const Error = () => {
  return (
    <Container maxWidth="sm" align="center">
      <img src={img} alt="not found" />
      <h1> 404 Page not found</h1>
      <h5>We can't seem to find the page you're looking for</h5>
      <Link to="/">Back Home</Link>
    </Container>
  );
};

export default Error;

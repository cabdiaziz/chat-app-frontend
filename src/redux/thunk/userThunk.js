import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  //? payload-data :  user data only.
  async (user) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/auth/users/signup`,
        { user }, //* user data
        {
          headers,
        }
      );
      return res;
    } catch (err) {
      return err.message;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  //? payload-data : auth user token.
  async ({ authToken }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/auth/users/login`,
        {},
        {
          headers, //? token and type of data like application/json etc.
        }
      );

      return res;
    } catch (err) {
      return err.message;
    }
  }
);

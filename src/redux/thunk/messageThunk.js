import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMessages = createAsyncThunk(
  "message/list",
  async ({ userToken }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      };
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_API}/messages`,
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

export const saveMessage = createAsyncThunk(
  "message/create",
  async ({ userToken, data }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/messages`,
        { data },
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

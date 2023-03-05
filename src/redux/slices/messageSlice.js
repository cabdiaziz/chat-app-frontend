import { createSlice } from "@reduxjs/toolkit";
import { saveMessage } from "../thunk/messageThunk";

const initialState = {
  isLoading: false,
  message: {},
  error: null,
};

const slice = createSlice({
  name: "message",
  initialState,
  extraReducers: {
    [saveMessage.pending]: (state) => {
      state.isLoading = true;
    },
    [saveMessage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.data;
    },
    [saveMessage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = initialState.message; //* assign null if rejected
      state.error = payload.error.message;
    },
  },
});

export default slice.reducer;

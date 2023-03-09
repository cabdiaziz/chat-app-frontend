import { createSlice } from "@reduxjs/toolkit";
import { saveMessage } from "../thunk/messageThunk";

const initialState = {
  isLoading: false,
  messages: {},
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
      // const message = { message: payload.data.messages };
      // state.messages.push(message);
      state.messages = payload.data.messages;
    },
    [saveMessage.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.messages = initialState.messages; //* assign null if rejected
      state.error = payload.error.messages;
    },
  },
});

export default slice.reducer;

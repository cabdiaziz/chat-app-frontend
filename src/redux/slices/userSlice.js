import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginUser } from "../thunk/userThunk";

//* login slice & signup slice

const initialState = {
  isLoading: false,
  user: {},
  error: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.data;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.data;
    },
    [createUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.user = initialState.user; //* equal to  null value
      state.error = payload.error.message;
    },
  },
});

export default slice.reducer;

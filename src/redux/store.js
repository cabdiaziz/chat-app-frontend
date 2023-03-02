import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/userSlice";
const store = configureStore({
  reducer: {
    user,
  },
});

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, useSelector, useDispatch };

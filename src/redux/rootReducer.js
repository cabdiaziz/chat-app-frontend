import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import userReducer from "./slices/userSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export { rootPersistConfig, rootReducer };
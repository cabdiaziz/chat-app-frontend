import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import userReducer from "./slices/userSlice";
import messageReducer from "./slices/messageSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["user", "message"],
};

const rootReducer = combineReducers({
  user: userReducer,
  messages: messageReducer,
});

export { rootPersistConfig, rootReducer };

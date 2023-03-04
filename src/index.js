import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode is only in the development for help us to find logic errors.
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </ReduxProvider>
  // </React.StrictMode>
);

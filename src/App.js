import "./App.css";
import { Login, Signup, Error } from "./pages";
import { Dashboard } from "./pages/chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./pages/components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Error />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

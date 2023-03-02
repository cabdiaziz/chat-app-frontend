import React from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 10 }}>
        <Typography variant="h3">Dashboard</Typography>
      </Box>
    </Box>
  );
};
export default Dashboard;

import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

export default function MainRoute() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
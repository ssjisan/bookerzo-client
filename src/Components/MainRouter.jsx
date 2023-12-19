import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";

export default function MainRoute() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }
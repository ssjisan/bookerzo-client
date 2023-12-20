import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import BookList from "../Pages/BookList";
import AddBooks from "../Pages/AddBooks";
import Invoice from "../Pages/Invoice";

export default function MainRoute() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book_list" element={<BookList />} />
        <Route path="/add_book" element={<AddBooks />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    );
  }
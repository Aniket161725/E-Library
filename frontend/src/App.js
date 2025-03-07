import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";  
import ProtectedRoute from "./components/ProtectedRoute";

import "./styles/App.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

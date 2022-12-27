import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.scss"
import Register from "./pages/Register";
import { AuthContext } from "./context/AuthContext";

export default function App() {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>    
      </Routes>
    </BrowserRouter>
  );
}

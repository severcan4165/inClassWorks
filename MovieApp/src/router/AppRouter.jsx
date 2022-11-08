import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main.jsx"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx";
import MovieDetail from "../pages/MovieDetail.jsx";
import Navbar from "../components/Navbar.jsx";

const AppRouter = () => {
  return <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/details/:id" element={<MovieDetail/>} />
      </Routes>
     </BrowserRouter>
  </>

};

export default AppRouter;

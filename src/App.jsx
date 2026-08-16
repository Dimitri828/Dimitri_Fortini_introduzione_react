import { useState } from "react";
import { BrowserRouter } from "react-router";
import { Routes } from "react-router";
import { Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import LoadingData from "./components/LoadingData";
import Homepage from "./views/Hompage";
import Posts from "./views/Posts";
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Posts.Detail />} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;

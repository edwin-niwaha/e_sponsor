import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import Home from "./components/Home";
import Students from "./pages/students/Students";
import Manage from "./pages/students/Manage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

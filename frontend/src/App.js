import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Sponsors from './components/Sponsors';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/sponsors" element={<Sponsors/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
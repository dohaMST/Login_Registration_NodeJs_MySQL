import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

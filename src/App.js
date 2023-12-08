import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import "./App.css";

import Home from "./Components/Home/Home.js";
// import Navbar from "./Components/Navbar/Navbar.js";

const App = () => {
  return (
    <Router> 
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

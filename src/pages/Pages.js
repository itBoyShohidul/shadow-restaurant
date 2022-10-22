import React from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Pages() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Pages;

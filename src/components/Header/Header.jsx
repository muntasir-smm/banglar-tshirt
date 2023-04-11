import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/review">Order Review</Link>
      <Link to="/grandpa">Grandpa</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};

export default Header;

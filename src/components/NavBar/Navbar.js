import React from "react";
import "./Navbar.scss";
import logo from "../../citytours.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo-img" src={logo} alt="city tours logo"></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

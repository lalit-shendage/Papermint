import React from "react";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <img src="https://www.cphi-online.com/Peppermint%20Horizontal%20Logo-comp306998.png" alt="logo" className="logo"/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link current" aria-current="page" href="#">Career</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </>
  );
};

export default Navbar;

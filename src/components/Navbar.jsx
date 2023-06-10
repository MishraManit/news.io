import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNues44CbJXyQyFBHwMACGCK4ula3bt_tZ7vYh21PBbfLhB33"
            style={{ width: "50px", height: "30px", color: "orangered" }}
            alt=""
          />{" "}
          News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/general">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="technology">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

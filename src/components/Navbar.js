import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand">
            <span style={{ color: "#092886" }}>Health</span>
            <span style={{ color: "#56ade2" }}>Care</span>
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active link" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="link nav-link active">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="link nav-link active">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Clinics" className="link nav-link active">
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Book" className="link nav-link active">
                  Book
                </Link>
              </li>
            </ul>
            <Link className="sign signUp" to="/Registration">
              Sign up
            </Link>
            <Link className="sign signIn" to="/Login">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

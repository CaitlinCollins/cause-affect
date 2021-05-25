import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import { Link } from "react-router-dom";
import "../../App.scss";

function Header() {
return (
  
            <header>
                <div id="header-div">
                    <h1 className="header">cause<span className="and">&</span>affect</h1>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler ml-auto "
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav navigation">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/Home" className="nav-link">Home
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/Register" className="nav-link">Register
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/Login" className="nav-link">Login
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/" className="nav-link">Logout
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/Search" className="nav-link">Search
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/MyCal" className="nav-link">Calendar
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
                <div className="marquee-wrapper">
                    <div className="marquee-scrolling"id="marquee-text"> Want to volunteer for a local organization? Want to make a charitable donation that affects your local community? We're here to help! Register or Login to get started! And be sure to check out our featured local organization!
                    </div>
                </div>
            </header>


    )

}

export default Header;
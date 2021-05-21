import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import { Link } from "react-router-dom";
import "../../App.scss";

function Header() {
return (
  
    <Row>
        <Col size="md-12">
            <header>
            <Row>
                <Col size="md-4">
                <h1 className="header">cause<span className="and">&</span>affect</h1>
                </Col>
                <Col size="md-8">
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
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
                                    <Link to="/Search" className="nav-link">Search
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
                                    <Link to="/MyCal" className="nav-link">Calendar
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
                </Col>
                </Row>
            </header>
        </Col>
    </Row>

    )

}

export default Header;
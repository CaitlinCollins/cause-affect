import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import { Link } from "react-router-dom";
import "./header.scss";

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
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link home" href="#">
                                        <Link to="/Home" className="nav-link">Home
                                        </Link>
                                    </a>
                                    <a className="nav-link"     aria-current="page" href="#">
                                        <Link to="/Search" className="nav-link">Search
                                        </Link>
                                    </a>
                                    <a className="nav-link" href="#">
                                        <Link to="/Register" className="nav-link">Register
                                        </Link>
                                    </a>
                                    <a className="nav-link" href="#">
                                        <Link to="/MyCal" className="nav-link">Calendar
                                        </Link>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </nav>
                    </Col>
                </Row>
                <Row>
                    {/* <Col size="md-12">
                        <form id="location">
                            <h3>Enter Your Loaction!</h3>
                            <input
                            id="citySearch"
                            placeholder="Enter City"
                            />
                            <input
                            id="stateSearch"
                            placeholder="Enter State"
                            />
                            <button id="search-btn" className="btn-info">Search!</button>
                        </form>
                    </Col> */}
                </Row>
            </header>
        </Col>
    </Row>

    )

}

export default Header;
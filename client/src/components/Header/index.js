import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Header() {
return (
    <Container>
        <Row>
            <Col size="xs-4">
                <h1 className="header">cause<span className="and">&</span>affect</h1>
                <form className="zip">
                    <input
                    className="zipSearch"
                    placeholder="Enter Zipcode to Search Locally"
                    />
                    <button className="searchBtn">Search!</button>
                </form>
            </Col>
        </Row>
    </Container>
    )

}

export default Header;
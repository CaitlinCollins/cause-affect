import React from "react";
import { Container, Row, Col } from "../Grid/grid";

function Header() {
return (
    <Container>
        <Row>
            <Col size="xs-4">
                <h1 className="header">cause<span className="and">&</span>affect</h1>
                <form className="city">
                    <input
                    className="citySearch"
                    placeholder="Enter City"
                    />
                    <input
                    className="stateSearch"
                    placeholder="Enter State"
                    />
                    <button className="searchBtn">Search!</button>
                </form>
            </Col>
        </Row>
    </Container>
    )

}

export default Header;
import React from "react";
import { Container, Row, Col } from "../Grid";

function SearchBtns() {
 return (
    <Row>
        <Col size="xs-3">
        <button className="searchOpBtn">Search Volunteer Oppotunities</button>
        <button className="registerOrgBtn">Register My Organization</button>
        <button className="myCalBtn">My Event Calendar</button>
        </Col>
    </Row>
 )
}

export default SearchBtns;
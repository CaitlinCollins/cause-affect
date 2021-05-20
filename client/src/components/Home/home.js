import React from "react";
import EventCalendar from '../EventsCal/eventsCal';
import Featured from "../Featured/featured";
// import Header from "../Header/header";
// import Footer from "../Footer/footer";
import { Container, Row, Col } from "../Grid/grid";

function Home() {
    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <Featured />
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <EventCalendar /> 
                </Col>
            </Row>
        </Container>
    )

}

export default Home;
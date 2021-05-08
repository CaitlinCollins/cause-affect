import React from "react";
import EventCalendar from '../EventsCal';
import SearchBtns from "../SearchBtns";
import Featured from "../Featured";
import { Container, Row, Col } from "../Grid";

function Home() {
    return (
        <Container>
            <Featured />
            <SearchBtns />
            <EventCalendar /> 
        </Container>
    )

}

export default Home;
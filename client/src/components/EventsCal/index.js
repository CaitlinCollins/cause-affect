import React, {Component} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Row, Col } from "../Grid";

export default class EventCalendar extends Component {
    render() {
        return(
            <FullCalendar
            plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth" />
        )
    }
}




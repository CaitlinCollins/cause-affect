import React, {Component} from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Container, Row, Col } from "../Grid/grid";

export default class EventCalendar extends Component {
    render() {
        return(
            <div className="card" id="calendar-card">
                <h2>Local Events</h2>
                <FullCalendar id="calendar"
                 plugins={[ dayGridPlugin ]}
                 initialView="dayGridMonth" />
            </div>
        )
    }
}




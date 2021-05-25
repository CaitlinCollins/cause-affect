import React, {Component} from "react";
import { Container, Row, Col } from "../Grid/grid";
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../utils/Events'
import Modal from '../Modal'
import "../../App.scss";



export default class EventCalendar extends Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    const triggerText = "Create Event"
    const onSubmit = (event) => {
      event.preventDefault(event);
      console.log(event.target.title.value);
      console.log(event.target.date.value);
    };
    return (

      <div className='demo-app'>
        {this.renderSidebar()}
        <div className='demo-app-main'>
            <h1>Local Events</h1>
            <Modal triggerText={triggerText} onSubmit={onSubmit} />

      <Row>
        <Col size="lg-3 md-12">
        <div className='demo-app'>
          {this.renderSidebar()}
       </div>
        </Col>
        <Col size="lg-9 md-12">
        <div className='demo-app-main card' id="calendar-card">
            <h2 id="local-events-h2">Local Events</h2>
          <div id="calendar">

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
        </div>
        </Col>
      </Row>
    )
  }

  renderSidebar() {
    return (
      <div className='card demo-app-sidebar' id="sidebar-card">
        <div className='demo-app-sidebar-section'>
          <h2 className="sidebar-h2">Instructions:</h2>
          <ul className="sidebar-li">
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul>
        </div>
        <div className='demo-app-sidebar-section'>
          <label id="sidbar-check">
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
              id="checkbox"
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h2 className="sidebar-h2">All Events: ({this.state.currentEvents.length})</h2>
          <ul className="sidebar-li">
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}




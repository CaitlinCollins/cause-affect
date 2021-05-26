import React, {Component} from "react";
import { Row, Col } from "../Grid/grid";
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS } from '../../utils/Events'
import Modal from '../Modal'
import "../../App.scss";
import API from "../../utils/API";



export default class EventCalendar extends Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }
  
  loadEvents = () => {
    API.getEvents()
      .then(res => {
      
        this.setState({
          currentEvents: res.data
        })
        console.log(res.data[0].title)
        console.log(res.data)
      }
      )
      .catch(err => console.log(err))
  };
 
   componentDidMount() {
    console.log("Component Mounted")
    console.log(INITIAL_EVENTS)
    this.loadEvents();
  
  }

  render() {
    
    return(
      <Row>
        <Col size="lg-3 md-12">
          <div className='demo-app'>
            {this.renderSidebar()}
          </div>
        </Col>
        
            {this.renderCalendar()}
          
            
      </Row>
    )
}
  renderCalendar() {
    const triggerText = "Create Event"
    return (
      
        <Col size="lg-9 md-12">
          <div className='demo-app-main card' id="calendar-card">
              <h2 id="local-events-h2">Local Events: ({this.state.currentEvents.length ? this.state.currentEvents[0].title : null})</h2>
              <div id="modal-center">
                <Modal triggerText={triggerText} />
              </div>
              
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
            initialEvents={ this.state.currentEvents.length ? this.state.currentEvents :
              [
                {
                  title: "Food Drive",
                  date: "2021-05-28",
                  start: "2021-05-28T09:00:00",
                  end: "2021-05-28T11:00:00",
                  volunteersNeeded: 12,
                },
                
              ]
            }
            
          />
          </div>
        </div>
        </Col>
      

    )
  }

  renderSidebar() {
    return (
      <div className='card demo-app-sidebar' id="sidebar-card">
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
          <h2 className="sidebar-h2">All Events: ({this.state.currentEvents.length})  </h2>
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

}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b> - 
      <i>{event.title}</i>
    </li>
  )
}




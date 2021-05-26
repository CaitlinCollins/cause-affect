import React, { useState, useEffect } from "react";
import API from "../../utils/API";

  //   eventName:
  //   eventDate:
  //   eventTime: 
  //   volunteersNeeded:
  function FormContent() {

    const [events, setEvents] = useState([])
    const [formObject, setFormObject] = useState({})
    useEffect(() => {
    loadEvents()
  }, [])

  function loadEvents() {
    API.getEvents()
      .then(res => {
        console.log(res.data)
        setEvents(res.data)
      }
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    console.log(formObject)
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.eventName && formObject.eventDate) {
      console.log(formObject)
      API.saveEvent({
        eventName: formObject.eventName,
        eventDate: formObject.eventDate,
        eventTime: formObject.eventTime,
        volunteersNeeded: formObject.volunteersNeeded
      })
        .then(res => window.location.reload())
        .catch(err => console.log(err));
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
        <h1>New Event</h1>
      <div className="form-group">
        <label htmlFor="Title">Event Title</label>
        <input className="form-control" id="event-title" name="eventName" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="Start Date">Date</label>
        <input type="date" className="form-control" name="eventDate" onChange={handleInputChange} />
        </div>
      <div className="form-group">
        <label htmlFor="Start Time">Start Time</label>
        <input
          type="time"
          name="eventTime"
          className="form-control"
          id="end-time"
          placeholder="10:00am"
          onChange={handleInputChange}
        />
      </div>
      {/* <div className="form-group">
        <label htmlFor="End Time">End Time</label>
        <input
          type="time"
          className="form-control"
          id="end-time"
          placeholder="2:00pm"
        />
      </div> */}
      <div className="form-group">
        <label htmlFor="Start Time">Volunteers Needed</label>
        <input
          name="volunteersNeeded"
          type="text"
          className="form-control"
          id="volunteers-needed"
          placeholder="50"
          onChange={handleInputChange}
        />
      </div><br />
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormContent;

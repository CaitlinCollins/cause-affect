import React, { useState, useEffect } from "react";
import API from "../../utils/API";

  //   title:
  //   start:
  //   end: 
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
    if (formObject.title) {
      let dateStrStart = formObject.date + 'T' + formObject.start + ':00'
      let dateStrEnd = formObject.date + 'T' + formObject.end + ':00'
      console.log(dateStrStart, dateStrEnd);
      API.saveEvent({
        title: formObject.title,
        date: formObject.date,
        start: dateStrStart,
        end: dateStrEnd,
        volunteersNeeded: formObject.volunteersNeeded
      })
        .then(res => window.location.reload())
        .catch(err => console.log(err));
    }
  };

  return (
    <form onSubmit={onSubmit}>
        <h1 id="new-event">New Event</h1>
      <div className="form-group modal-group">
        <label htmlFor="Title">Event Title</label>
        <input className="form-control" id="event-title" name="title" onChange={handleInputChange} />
      </div>
      <div className="form-group modal-group">
        <label htmlFor="Start Date">Date</label>
        <input type="date" className="form-control" name="date" onChange={handleInputChange} />
        </div>
      <div className="form-group modal-group">
        <label htmlFor="Start Time">Start Time</label>
        <input
          type="time"
          name="start"
          className="form-control"
          id="end-time"
          placeholder="10:00am"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group modal-group">
        <label htmlFor="End Time">End Time</label>
        <input
          type="time"
          name="end"
          className="form-control"
          id="end-time"
          placeholder="2:00pm"
          onChange={handleInputChange}
        />
      </div>
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
      <div className="form-group modal-group">
        <button className="form-control btn btn-primary" id="modal-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormContent;

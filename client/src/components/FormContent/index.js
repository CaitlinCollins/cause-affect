import React, { useState } from "react";

export const FormContent = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <form onSubmit={onSubmit}>
        <h1 id="new-event">New Event</h1>
      <div className="form-group modal-group">
        <label htmlFor="Title">Event Title</label>
        <input className="form-control" id="event-title" />
      </div>
      <div className="form-group modal-group">
        <label htmlFor="Start Date">Date</label>
        <input type="date" className="form-control" />
        </div>
      <div className="form-group modal-group">
        <label htmlFor="Start Time">Start Time</label>
        <input
          type="time"
          className="form-control"
          id="end-time"
          placeholder="10:00am"
        />
        
       
        
      </div>
      <div className="form-group modal-group">
        <label htmlFor="End Time">End Time</label>
        <input
          type="time"
          className="form-control"
          id="end-time"
          placeholder="2:00pm"
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

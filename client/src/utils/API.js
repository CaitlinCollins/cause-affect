import axios from "axios";
require("dotenv").config();

export default {
  // register user function
  registerUser: function (userData) {
    return axios.post("/register", userData);
  },
  //   login user function
  loginUser: function (userData) {
    return axios.post("/login", userData);
  },
  //   register organization function
  registerOrganization: function (userData) {
    return axios.post("/registerorg", userData);
  },
  //   login organization function
  loginOrg: function (userData) {
    return axios.post("/loginorg", userData);
  },

  getEvents: function() {
    return axios.get("/api/calendar")
  },
  saveEvent: function(eventData) {
    return axios.post("/api/calendar", eventData);
  }
};

  // const eventSchema = new Schema({
    // eventName:
    // eventDate:
    // eventTime: 
    // volunteersNeeded:
  // });
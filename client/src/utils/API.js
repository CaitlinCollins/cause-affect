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
  // getData:() =>
  // axios({
  //     'method':'GET',
  //     'url': `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&state=${req.query.state}&city=${req.query.city}&categoryID=${req.query.cause}`,
  //     // 'params': {
  //     //     'search':'parameter',
  //     // },
  // }

  // )
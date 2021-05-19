import axios from "axios";

export default {
    //register new user
    registerUser: function(userData){
        return axios.post("/api/register", userData);
    }

};
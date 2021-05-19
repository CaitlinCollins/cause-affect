import axios from "axios";

export default {
    //register new user
    registerUser: function(userData){
        console.log(userData);
        return axios.post("/api/register", userData);
    }

};
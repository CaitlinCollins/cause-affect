import axios from "axios";
require('dotenv').config()


export default {

    registerUser: function (userData){
        return axios.post("/register", userData);
    }
    // getData:() => 
    // axios({
    //     'method':'GET',
    //     'url': `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&state=${req.query.state}&city=${req.query.city}&categoryID=${req.query.cause}`,
    //     // 'params': {
    //     //     'search':'parameter',
    //     // },
    // }
    
    // )
};
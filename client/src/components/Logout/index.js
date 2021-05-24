import React  from "react";
import {useHistory} from "react-router-dom";

function Logout(){
    const history = useHistory();

    function handleSubmit(event){event.preventDefault();}
    
    history.push("/");
    return (console.log("logged out"));
}

export default Logout;
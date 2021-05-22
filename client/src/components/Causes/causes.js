import { isPropsValid } from "@fullcalendar/common";
import React from "react";
import "../../App.scss";
import AwIcon from "awicons-react";


function Causes(props){

    function changeColor() {
        var causeDiv = document.getElementById('select-causes');
        causeDiv.style.color="white";
        console.log("Button was clicked");
        
    }
    
    return (
        <div id ="select-causes">
            <label><input type="radio" name="causes" onChange={ changeColor } value={props.value} /><span className="cause-title">{props.title}</span></label>
            <AwIcon id="cause-image" className="icon" iconName={props.img}/>
        </div>
        
 )

}

export default Causes;
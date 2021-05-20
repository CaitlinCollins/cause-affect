import { isPropsValid } from "@fullcalendar/common";
import React from "react";
import "./causes.scss";
import AwIcon from "awicons-react";


function Causes(props){
    
    return (
        <div className="text-center">
        <p id = "select-causes">
            <label><input type="radio" name="causes" value={props.value} /><span className="cause-title">{props.title}</span></label>
            <AwIcon id="cause-image" className="icon" iconName={props.img}/>
        </p>
        </div>
        
 )

}

export default Causes;
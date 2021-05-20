import { isPropsValid } from "@fullcalendar/common";
import React from "react";
import "../../App.scss";
import AwIcon from "awicons-react";


function Causes(props){
    return (
        <button id="cause-btn">
            <p id="cause-title">{props.title}</p>
            <AwIcon id="cause-image" className="icon" iconName={props.img}/>

        </button>
 )

}

export default Causes;
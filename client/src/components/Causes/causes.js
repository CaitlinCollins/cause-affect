import { isPropsValid } from "@fullcalendar/common";
import React from "react";
import { Container, Row, Col } from "../Grid/grid";


function Causes(props){
    return (
        <button className="btn-primary">
            <p>{props.title}</p>
            <p>{props.img}</p>

        </button>
 )

}

export default Causes;
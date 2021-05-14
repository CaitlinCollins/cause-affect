import React from "react";
import { Container, Row, Col } from "../Grid/grid";

function Featured() {
    return (
        <div>
            <h2>Featured Local Organization: My Organization</h2>
            <img 
                alt="Organization Photo"
                src="/assets/redcross.png"
            ></img>
            <ul>
                <li>Details: These are details!</li>
                <li>Website: <a href="#">www.mywebsite.com</a></li>
                <li>Date: Today!</li>
                <li>Time: Now!</li>
                <li>Volunteers Needed: 10000</li>
            </ul>
            <button>Volunteer Now!</button>
            <button>Make a Donation!</button>
        </div>
    )
}

export default Featured;
import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import "./featured.scss";

function Featured() {
    return (
        <div className="card" id="featured-background">
            <h2>Featured Local Organization: My Organization</h2>
            <img id="org-photo"
                alt="Organization Photo"
                src="/assets/cause.jpeg"
            ></img>
            <ul id="details">
                <p>Details: These are details!</p>
                <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
                <p>Date: Today!</p>
                <p>Time: Now!</p>
                <p>Volunteers Needed: 10000</p>
            </ul>
            <button id="volunteer-btn">Volunteer Now!</button>
            <button id="donate-btn">Make a Donation!</button>
        </div>
    )
}

export default Featured;
import React from "react";
import "./searchResults.scss";

function SearchResults() {
    return (
    <div>
    <div id="search-results-div" className="card text-center">
        <h2 id="org-name">My Organization</h2>
            <img id="org-img"
                alt="Organization Photo"
                src="/assets/cause.jpeg"
            ></img>
            <ul id="org-details">
                <p>Details: These are details!</p>
                <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
                <p>Date: Today!</p>
                <p>Time: Now!</p>
                <p>Volunteers Needed: 10000</p>
            </ul>
            <button id="org-volunteer">Volunteer Now!</button>
            <button id="org-donate">Make a Donation!</button>
    </div>
    <div id="search-results-div" className="card text-center">
    <h2 id="org-name">My Organization</h2>
        <img id="org-img"
            alt="Organization Photo"
            src="/assets/cause.jpeg"
        ></img>
        <ul id="org-details">
            <p>Details: These are details!</p>
            <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
            <p>Date: Today!</p>
            <p>Time: Now!</p>
            <p>Volunteers Needed: 10000</p>
        </ul>
        <button id="org-volunteer">Volunteer Now!</button>
        <button id="org-donate">Make a Donation!</button>
    </div>
    <div id="search-results-div" className="card text-center">
        <h2 id="org-name">My Organization</h2>
            <img id="org-img"
                alt="Organization Photo"
                src="/assets/cause.jpeg"
            ></img>
            <ul id="org-details">
                <p>Details: These are details!</p>
                <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
                <p>Date: Today!</p>
                <p>Time: Now!</p>
                <p>Volunteers Needed: 10000</p>
            </ul>
            <button id="org-volunteer">Volunteer Now!</button>
            <button id="org-donate">Make a Donation!</button>
        </div>
        </div>
    )
}

export default SearchResults;
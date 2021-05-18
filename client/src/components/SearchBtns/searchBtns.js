import React from "react";
import { Link } from "react-router-dom";

function SearchBtns() {
 return (
    <div>
        <button className="btn-info" id="searchop-btn">
            <Link to="/Search">Search Volunteer Oppotunities
            </Link>
        </button>
        <button className="btn-info" id="register-btn">Register My Organization</button>
        <button className="btn-info" id="mycal-btn">My Event Calendar</button>
    </div>
 )
}

export default SearchBtns;
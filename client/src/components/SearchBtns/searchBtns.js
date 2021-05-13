import React from "react";
import { Link } from "react-router-dom";

function SearchBtns() {
 return (
    <div>
        <button className="searchOpBtn">
            <Link to="/Search">Search Volunteer Oppotunities
            </Link>
        </button>
        <button className="registerOrgBtn">Register My Organization</button>
        <button className="myCalBtn">My Event Calendar</button>
    </div>
 )
}

export default SearchBtns;
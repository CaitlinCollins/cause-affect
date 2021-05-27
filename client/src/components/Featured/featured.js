import React from "react";
import "../../App.scss";

function Featured() {
    return (
        <div className="card" id="featured-background">
            <h2>Featured Local Organization: <span id="featured-name">Twin Cities Stand Together</span></h2>
            <img id="org-photo"
                alt="Organization Photo"
                src="/assets/tccharity.png"
            ></img>
            <ul id="details">
                <p>Mission: TCST knows that our strength lies not only in the words we stand by, but most importantly through the actions of our initiatives. Early 2020, our Non-Profit Organization realized that by working together we could overcome our challenges much more efficiently, and that is why we ultimately decided to launch TCST. Our actions provide much needed resources within our communities. </p>
                <p>Website: <a href="https://www.tcstmn.org/" target="_blank" id="website">www.tcstmn.org</a></p>
                <p>Event: Clothing and Food Drive</p>
                <p>Location: Gethsemane Episcopal Church - 905 S 4th Ave. Minneapolis</p>
                <p>Sun, June 19th & June 20th</p>
                <p>Volunteers Needed: 50</p>
            </ul>
            <div className="btn-center">
                <button id="volunteer-btn">
                    <a id="volunteer-link" href="https://www.tcstmn.org/" target="_blank">Volunteer Now!</a>
                </button>
                <button id="donate-btn">
                    <a className="donate-link" href="https://www.tcstmn.org/donate" target="_blank">Make a Donation!</a>
                </button>
            </div>
        </div>
    )
}

export default Featured;
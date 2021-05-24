import React from 'react';

const Result = ({ charity }) => {
    return (
        <div>
            <div className="card text-center" id="charity-card">
                <h4 className="charity-title">
                    <a 
                    className="charity-link" href={charity.websiteURL} target="_blank"> {charity.charityName}</a>
                </h4>
                <p className="charity-mission">{charity.mission}</p>
                <div className="btn-center">
                <button id="org-volunteer">
                    <a id="volunteer-link" href={charity.websiteURL} target="_blank">Volunteer Now!</a>
                </button>
                <button id="org-donate">
                    <a id="donate-link" href={charity.websiteURL} target="_blank">Make a Donation!</a>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Result;
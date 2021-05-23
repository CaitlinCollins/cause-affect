import React from 'react';

const Result = ({ charity }) => {
    return (
        <div>
            <div className="card text-center">
                <h4 className="charity-title">
                    <a 
                    className="charity-link" href={charity.websiteURL} target="_blank"> {charity.charityName}</a>
                </h4>
                <p>{charity.mission}</p>
            </div>
        </div>
    )
}

export default Result;
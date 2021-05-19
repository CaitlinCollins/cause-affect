import React from 'react';

const Result = ({ charity }) => {
    return (
        <div>
            <div>
                <h1>
                    <a 
                    href={charity.websiteURL} target="_blank"> {charity.charityName}</a>
                </h1>
                <p>{charity.mission}</p>
            </div>
        </div>
    )
}

export default Result;
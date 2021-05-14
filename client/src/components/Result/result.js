import React from 'react';

const Result = ({ cause }) => {
    return (
        <div>
            <div>
                <h1>
                    <a 
                    href={cause.websiteURL} target="_blank"> {cause.charityName}</a>
                </h1>
                <h3>{cause.mission}</h3>
            </div>
        </div>
    )
}

export default Result;
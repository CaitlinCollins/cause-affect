import React from 'react';
import { Row, Col } from "../Grid/grid";

const Result = ({ charity }) => {
    return (
        <Row>
            <Col size="md-2 sm-0"></Col>
            <Col size="md-8 sm-12">
                <div className="text-center">
                    <div className="card" id="charity-card">
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
            </Col>
            <Col size="md-2 sm-0"></Col>
        </Row>
    )
}

export default Result;
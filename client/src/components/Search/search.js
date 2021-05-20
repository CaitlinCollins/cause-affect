import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import Causes from "../Causes/causes";
import SearchResults from "../SearchResults/searchResults";
import "../../App.scss";


function Search() {

    const causesArray = [
        {
            title: "Health",
            img: "medkit"
        },
        {
            title: "Animals",
            img: "cat"
        },
        {
            title: "Climate",
            img: "globe-americas"
        },
        {
            title: "Peace & Justice",
            img: "peace"
        },
        {
            title: "Food",
            img: "apple-alt"
        },
        {
            title: "Arts & Culture",
            img: "palette"
        },
        {
            title: "Education",
            img: "book-open"
        },
        {
            title: "Homeless",
            img: "home"
        },
        {
            title: "Conservation",
            img: "water"
        },
        {
            title: "Crisis",
            img: "user-injured"
        },
        {
            title: "Energy",
            img: "lightbulb"
        },
        {
            title: "Other",
            img: "hands-helping"
        },
    ]

    return (
        <div>
            <form className="text-center">
                <h2 id="enter-location">Search by Location:</h2>
                <input id="city-name" placeholder="City">
                </input>
                <input id="state-name" placeholder="State">
                </input>
                <button id="search-btn">   
                Search!</button>
            </form>
            <Row>
                <Col size="md-12">
                    <h2>Search by Type:</h2>
                </Col>
            </Row>
            <Row>
            <Col size="lg-4 md-2 sm-0">
            </Col>
            <Col size="lg-4 md-8 sm-12">
                <div className="text-center">
                    {causesArray.map(cause => {
                        return (
                            <Causes 
                                title={cause.title}
                                img={cause.img}
                            />
                        )
                    })}
                
                </div>
            </Col>
            <Col size="lg-4 md-2 sm-0">
            </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="text-center">
                        <SearchResults />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Search;
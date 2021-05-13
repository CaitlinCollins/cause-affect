import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import Causes from "../Causes/causes";

function Search() {

    const causesArray = [
        {
            title: "Health",
            img: "Coming Soon!"
        },
        {
            title: "Animals",
            img: "Coming Soon!"
        },
        {
            title: "Climate",
            img: "Coming Soon!"
        },
        {
            title: "Peace & Justice",
            img: "Coming Soon!"
        },
        {
            title: "Food",
            img: "Coming Soon!"
        },
        {
            title: "Arts & Culture",
            img: "Coming Soon!"
        },
        {
            title: "Education",
            img: "Coming Soon!"
        },
        {
            title: "Homeless",
            img: "Coming Soon!"
        },
        {
            title: "Conservation",
            img: "Coming Soon!"
        },
        {
            title: "Crisis",
            img: "Coming Soon!"
        },
        {
            title: "Enery",
            img: "Coming Soon!"
        },
        {
            title: "Other",
            img: "Coming Soon!"
        },
    ]

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <h1>Search by Type:</h1>
                </Col>
            </Row>
            <Row>
            <Col size="md-4">
                    <div>
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
            </Row>
        </Container>
    )
}

export default Search;
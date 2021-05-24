import { set } from "mongoose";
import React from "react";
import Causes from "../Causes/causes";
import { Container, Row, Col } from "../Grid/grid";
const UserInput = ({ handleSubmit }) => {

    
    const categoriesArray = [
        {
            title: "Health",
            img: "medkit",
            causeId: "5"
        },
        {
            title: "Environment",
            img: "globe-americas",
            causeId: "4"
        },
        {
            title: "Peace & Justice",
            img: "peace",
            causeId: "8"
        },
        {
            title: "Food",
            img: "apple-alt",
            causeId: "4"
        },
        {
            title: "Arts & Culture",
            img: "palette",
            causeId: "2"
        },
        {
            title: "Education",
            img: "book-open",
            causeId: "3"
        },
        {
            title: "Human Services",
            img: "home",
            causeId: "6"
        },
    
    
    ]

    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [cause, setCause] = React.useState("")

    const sendData = (event) => {
        event.preventDefault()
        const data = {
            cause,
            city,
            state: state.toUpperCase()
        }

        
        console.log(cause);
     
        setTimeout(() => { handleSubmit(data) }, 2000);
        
    }
    return (
    <div>
       <form className="text-center">
        <h2>Where would you like to get involved?</h2>
            <input id="city-name" type = "text" value = { city } placeholder="CITY (MINNEAPOLIS/ ST. PAUL)" onChange={(event) => setCity(event.target.value)}/>
            <input id="state-name" type = "text" value={state} placeholder="STATE (MN) - (two letters)" onChange={(event) => setState(event.target.value)}/>
                <h3 id="interest">Choose an Interest:</h3> 
                <Row>
                    <Col size="md-4 sm-0">
                    </Col>
                    
                    <Col size="md-4 sm-12">
                
                    
                        {/* <select value = {cause} onChange={(e) => setCause(e.target.value)}>
                        <option value = "2" >Arts, Culture, Humanities</option>
                        <option value = "3" >Education</option>
                        <option value = "4" >Environment</option>
                        <option value = "5" >Health</option>
                        <option value = "6" >Human Services</option> 
                        </select><br /> */}
                        <div value = {cause} onChange={(e) => setCause(e.target.value)}>
                        {categoriesArray.map(category => {
                        return (
                            <div id="cause-div">
                            <Causes 
                                key={category.causeId}
                                value={category.causeId}
                                title={category.title}
                                img={category.img}
                                onClick={sendData}
                                
                            />
                         
                            </div>
                        )
                         
                    })}
                       </div>
                       
                     </Col>
                     <Col size="md-4 sm-0"></Col>
                    
                </Row>
                <Row>
                    <Col size="md-4 sm-12"></Col>
                    <Col size="md-4 sm-12">
                        <button type="submit" value="Submit" onClick={sendData} id="search-btn">
                            Search!
                        </button>
                    </Col>
                    <Col size="md-4 sm-12"></Col>
                </Row>
      </form>
    </div>
)
}
export default UserInput;
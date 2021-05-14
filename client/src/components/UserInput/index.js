import React from "react";
const UserInput = ( handleSubmit ) => {

    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [cause, setCause] = React.useState("0")

    const sendData = (event) => {
        event.preventDefault()
        const data = {
            cause,
            city,
            state: state.toUpperCase()
        }
        handleSubmit('userInput', data)
        
    }

    return (
    <div>
      <form>
        <label>  
        <h3>Where are you looking to get involved?</h3>
            <input type = "text" value = { city } placeholder="CITY (MINNEAPOLIS, ST. PAUL, ETC.)" onChange={(event) => setCity(event.target.value)}/>
            <input type = "text" value={state} placeholder="STATE (MN) - (two letter abbreviation)" onChange={(event) => setState(event.target.value)}/>
                <h3>What are your interests</h3> 
                <select value = {cause} onChange={(e) => setCause(e.target.value)}>
                <option value = "2" >Arts, Culture, Humanities</option>
                <option value = "3" >Education</option>
                <option value = "4" >Environment</option>
                <option value = "5" >Health</option>
                <option value = "6" >Human Services</option>
            </select>
        </label>
                <button type="submit" value="Submit" onClick={sendData}>
                    Submit
                </button>
      </form>
    </div>
)
}

export default UserInput;
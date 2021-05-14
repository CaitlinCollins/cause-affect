import React from "react";
import Result from "../Result"
import UserInput from "../UserInput"

const Search = () => {
    const [display, setDisplay] = React.useState()
    const [num, setNum] = React.useState(0)
    
    // query vars
    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [cause, setCause] = React.useState("")

    const handleSubmit = (data) => {
        setCity(data.city)
          setState(data.state)
          setCause(data.cause)
          setNum(1);
          return setTimeout( () => (
            setDisplay(<UserInput handleSubmit = { handleSubmit } />)
          ), 500);
    }
    // both location and interest are submitted, setDisplay out here to have access to vars and pass as props
    if (num == 1) {
      setNum(2)
      setDisplay(<Result city = { city } state = { state } cause = { cause } />)
    };


    return ( 
        <div>
          {display}
        </div>
    );

}

export default Search;
import React from "react";
import SearchResults from "../SearchResults/searchResults"
import UserInput from "../UserInput"

const SearchFunction = () => {
    const [display, setDisplay] = React.useState()
    const [num, setNum] = React.useState(0)

    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [cause, setCause] = React.useState("")


    const handleSubmit = (data) => {
      setCity(data.city)
        setState(data.state)
        setCause(data.cause)
        setNum(1);
        console.log(data);
        
        
  }

    React.useEffect( () => {
      setDisplay(<UserInput handleSubmit = { handleSubmit } />);
    }, []);


    
    // both location and interest are submitted, setDisplay out here to have access to vars and pass as props
    if (num === 1) {
      setNum(2)
      setDisplay(<SearchResults city = { city } state = { state } cause = { cause } />)
      console.log(city)
      console.log(cause)
      console.log(num);
    };


    return ( 
        <div>
          {display}
        </div>
    );
}

export default SearchFunction;
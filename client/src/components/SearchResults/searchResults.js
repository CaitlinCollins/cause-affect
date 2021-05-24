import React from 'react';
import axios from 'axios'
import Result from '../Result/result';
import "../../App.scss";

const SearchResults = ({ city, state, cause }) => {

    const [items, setItems] = React.useState(null);
    const [error, setError] = React.useState();

    
    React.useEffect( () => {
        axios.post(`/charityApi`, {  
            city,
            state,
            cause
        })
          .then(res => {
            console.log(res);
            return setItems(res.data);
          })
          .catch(err => {
            return setError(err.message);
          })

    }, [])

    

    if (error) return (
      <div className="error">
        <h1>{error}</h1>
        <p>Looks like there was an invalid input. Make sure you put in a correct city, and that your state input was a 2-letter state abbreviation.
        </p>
      </div>
    )
    
    if (!items) {
      console.log(cause);
      return (
        <div>Loading...</div>
      )
    }
    return (
       <div className="index">
        <h2 id="results-h2">
          There are {items.length} that match your search:
        </h2>
         {items.map(item => (
          <Result charity = { item } />
        ))} 
      </div>


    )
}


export default SearchResults;
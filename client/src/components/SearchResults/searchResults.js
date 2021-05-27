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
        <h2>No Results Found</h2>
        <p id = "no-results">No results were found for your search. Make sure you put in a correct city, and that your state input was a 2-letter state abbreviation, and please try again. 
        </p>
        <div className = "text-center">
        <button className="modal-button">
            <a className = "donate-link" title = "Search" href="/search">Try again</a>
        </button>
        </div>
      </div>
    )
    
    if (!items) {

      return (
        <div>Loading...</div>
      )
    }

    return (
       <div className="index">
        <h2 id="results-h2">
          There are {items.length} causes that match your search:
        </h2>
         {items.map(item => (
          <Result charity = { item } />
        ))} 
      </div>


    )
}


export default SearchResults;
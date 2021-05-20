import React from 'react';
import axios from 'axios'
import Result from '../Result/result';
import "../../App.scss";

const SearchResults = ({ city, state, cause }) => {

    const [items, setItems] = React.useState();
    const [error, setError] = React.useState();

    
    React.useEffect( () => {
        axios.get(`/call`, { 
            params: {
            city,
            state,
            cause
          }
        })
          .then(res => {
            return setItems(res.data);
          })
          .catch(err => {
            return setError(err.message);
          })

    }, [])

    // if (error) return (
    //   <div className="error">
    //     <h1>{error}</h1>
    //     <p>Looks like there was an invalid input. Make sure you put in a correct city, and that your state input was a 2-letter state abbreviation.
    //     </p>
    //   </div>
    // )

    return (
    <div>
      {/* <div className="index">
        <h1>
          there are {items.length} that match your input:
        </h1>
        {items.map(item => (
          <Result charity={item} />
        ))}
      </div> */}
      <div id="search-results-div" className="card text-center">
      <h2 id="org-name">My Organization</h2>
          <img id="org-img"
              alt="Organization Photo"
              src="/assets/cause.jpeg"
          ></img>
          <ul id="org-details">
              <p>Details: These are details!</p>
              <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
              <p>Date: Today!</p>
              <p>Time: Now!</p>
              <p>Volunteers Needed: 10000</p>
          </ul>
          <button id="org-volunteer">Volunteer Now!</button>
          <button id="org-donate">Make a Donation!</button>
  </div>
  <div id="search-results-div" className="card text-center">
  <h2 id="org-name">My Organization</h2>
      <img id="org-img"
          alt="Organization Photo"
          src="/assets/cause.jpeg"
      ></img>
      <ul id="org-details">
          <p>Details: These are details!</p>
          <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
          <p>Date: Today!</p>
          <p>Time: Now!</p>
          <p>Volunteers Needed: 10000</p>
      </ul>
      <button id="org-volunteer">Volunteer Now!</button>
      <button id="org-donate">Make a Donation!</button>
  </div>
  <div id="search-results-div" className="card text-center">
      <h2 id="org-name">My Organization</h2>
          <img id="org-img"
              alt="Organization Photo"
              src="/assets/cause.jpeg"
          ></img>
          <ul id="org-details">
              <p>Details: These are details!</p>
              <p>Website: <a href="#" target="_blank" id="website">www.mywebsite.com</a></p>
              <p>Date: Today!</p>
              <p>Time: Now!</p>
              <p>Volunteers Needed: 10000</p>
          </ul>
          <button id="org-volunteer">Volunteer Now!</button>
          <button id="org-donate">Make a Donation!</button>
      </div>
      </div>

    )
}

export default SearchResults;
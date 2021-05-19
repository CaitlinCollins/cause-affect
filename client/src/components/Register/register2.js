import React, { Component } from "react";

class Register extends Component {
    // Setting the component's initial state
    state = {
      username: "",
      email: "",
      password: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
  
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs${this.state.middleName} ${this.state.lastName}
    //   alert(`Hello ${this.state.username} you have been registered sucessfully

    //   `);
      this.setState({
        username: "",
        email: "",
        password: ""
      });
    };
  
    render() {
      // Notice how each input has a `value`, `name`, and `onChange` prop
      return (
        <div>
          <p>
            {/* Hello {this.state.firstName} {this.state.lastName} */}
          </p>
          <form className="form">
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="username"
            />
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="email"
            />
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="password"
            />
            <button onClick={this.handleFormSubmit}>Register Now</button>
          </form>
        </div>
      );
    }
  }

export default Register;
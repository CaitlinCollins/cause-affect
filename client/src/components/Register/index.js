import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

function Register() {
return(
    <Container> 
<Row>
  <Col size="md-12">
    <div className="login-form">
      <h2 className="page-title">Register</h2>
      <form className="form ">
      <div className="form-group loginInput">
          <label for="username-login">Username:</label>
          <input className="form-input inputLogin" type="text" id="username-login" />
        </div>
        <div className="form-group loginInput">
          <label for="email-login">Email:</label>
          <input className="form-input inputLogin" type="text" id="email-login" />
        </div>
        <div className="form-group loginInput">
          <label for="password-login">Password:</label>
          <input className="form-input inputLogin" type="password" id="password-login" />
        </div>
        <div className="form-group">
          <button className="btn loginBtn" type="submit">Login!</button>
        </div>
      </form>
    </div>
  </Col>
  </Row>
    </Container>
    
)

}

export default Register;
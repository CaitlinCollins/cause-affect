import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import "../../App.scss";

function Login() {
return(
    <Container> 
<Row>
  <Col size="md-12">
    <div className="login-form">
      <h2 className="page-title">Login</h2>
      <form className="form">
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

export default Login;
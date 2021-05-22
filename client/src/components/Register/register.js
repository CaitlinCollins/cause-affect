import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import RegisterBtn from "../RegisterBtn";

function Register() {
  return (
    <Container>
      <Row>
      <Col size="md-2"></Col>
        <Col size="md-8">
          <div className="text-center">
          <div className="login-form">
            <h2 className="page-title">Register</h2>
            <form className="form ">
              <div className="form-group loginInput">
                <label for="username-login">Username:</label>
                <input
                  className="form-input inputLogin"
                  type="text"
                  id="username-login"
                  // registerContext.username={target.value}
                />
              </div>
              <div className="form-group loginInput">
                <label for="email-login">Email:</label>
                <input
                  className="form-input inputLogin"
                  type="text"
                  id="email-login"
                />
              </div>
              <div className="form-group loginInput">
                <label for="password-login">Password:</label>
                <input
                  className="form-input inputLogin"
                  type="password"
                  id="password-login"
                />
              </div>
              <div className="form-group">
              <RegisterBtn/>
              </div>
            </form>
          </div>
          </div>
        </Col>
        <Col size="md-2"></Col>
      </Row>
    </Container>
  );
}

export default Register;

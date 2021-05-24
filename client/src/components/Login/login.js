import React, { useState } from "react";
import { Container, Row, Col } from "../Grid/grid";
import "../../App.scss";
import API from "../../utils/API";
import LoginBtn from "../LoginBtn";
import {useHistory, Link, useLocation} from "react-router-dom";


function Login() {
  const history = useHistory();
  const location = useLocation();
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.loginUser({
        username: formObject.username,
        password: formObject.password,
      })
        .then((res) =>  history.push("/"))
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <Row>
      <Col size="lg-3 md-2"></Col>
        <Col size="lg-6 md-8">
          <div className="login-form text-center">
            <h2 className="page-title">Login</h2>
            <form className="form">
              <div className="form-group loginInput">
                <label for="username-login">Username:</label>
                <input
                  className="form-input inputLogin"
                  type="text"
                  id="username-login"
                  name="username"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group loginInput">
                <label for="password-login">Password:</label>
                <input
                  className="form-input inputLogin"
                  type="password"
                  id="password-login"
                  name="password"
                  onChange={handleInputChange}
                />
                 
              </div>
             
              <div className="form-group">
                <LoginBtn
                  disabled={!(formObject.username && formObject.password)}
                  onClick={handleFormSubmit}
                >
                  Login
                </LoginBtn>
                <Link
          to="/loginorg"
          className={location.pathname === "/loginorg" ? "nav-link active" : "nav-link"}
        >
          Organization Login
        </Link>
              </div>
            </form>
          </div>
        </Col>
        <Col size="lg-3 md-2"></Col>
      </Row>
    </Container>
  );
}

export default Login;

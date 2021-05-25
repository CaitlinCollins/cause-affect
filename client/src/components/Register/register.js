import React, { useState } from "react";
import { Container, Row, Col } from "../Grid/grid";
import API from "../../utils/API";
import RegisterBtn from "../RegisterBtn";
import { Link, useLocation ,useHistory} from "react-router-dom";

function Register() {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.email && formObject.password) {
      API.registerUser({
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => history.push("/"))
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <Row>
        <Col size="lg-3 md-2"></Col>
        <Col size="lg-6 md-8">
          <div className="login-form text-center">
            <h2 className="page-title">Register</h2>
            <form className="form ">
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
                <label for="email-login">Email:</label>
                <input
                  className="form-input inputLogin"
                  type="text"
                  id="email-login"
                  name="email"
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
                <RegisterBtn
                  disabled={
                    !(
                      formObject.username &&
                      formObject.email &&
                      formObject.password
                    )
                  }
                  onClick={handleFormSubmit}
                >
                  Register
                </RegisterBtn>
                <div className="login-link">
                <Link
                  to="/registerorg"
                  className={
                    location.pathname === "/registerorg"
                  }
                >
                  Register Your Organization
                </Link>
                </div>
              </div>
            </form>
          </div>
        </Col>
        <Col size="lg-3 md-2"></Col>
      </Row>
    </Container>
  );
}

export default Register;

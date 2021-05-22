import React,  {useState }  from "react";
import { Container, Row, Col } from "../Grid/grid";
import "../../App.scss";
import API from "../../utils/API";
import LoginOrgBtn from "../LoginOrgBtn";

function LoginOrg() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.loginOrg({
        username: formObject.username,
        password: formObject.password,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container>
      <Row>
        <Col size="md-12">
          <div className="login-form">
            <h2 className="page-title">Login</h2>
            <form className="form">
              <div className="form-group loginInput">
                <label for="username-login">Username:</label>
                <input
                  className="form-input inputLogin"
                  type="text"
                  id="username-login"
                  name= "username"
                  onChange={handleInputChange}

                />
              </div>
              <div className="form-group loginInput">
                <label for="password-login">Password:</label>
                <input
                  className="form-input inputLogin"
                  type="password"
                  id="password-login"
                  name= "password"
                  onChange={handleInputChange}
                />
              </div>

    
              <div className="form-group">
              <LoginOrgBtn
                 disabled={!(formObject.username && formObject.password)}
                 onClick={handleFormSubmit}
                >Login</LoginOrgBtn>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginOrg;

import React, { useState } from "react";
import { Container, Row, Col } from "../Grid/grid";
import API from "../../utils/API";
import "../../App.scss";
import RegisterOrgBtn from "../RegisterOrgBtn";
import { useHistory } from "react-router-dom";
// register an organization
function RegisterOrg() {
  const history = useHistory();
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.name &&
      formObject.email &&
      formObject.orgName &&
      formObject.website &&
      formObject.username &&
      formObject.password
    ) {
      API.registerOrganization({
        name: formObject.name,
        title: formObject.title,
        email: formObject.email,
        orgName: formObject.orgName,
        website: formObject.website,
        details: formObject.details,
        username: formObject.username,
        password: formObject.password,
      })
        //   return to home once registered
        .then((res) => history.push("/"))
        .catch((err) => console.log(err));
    }
  }
  return (
    <Container>
      <Row>
      <Col size="lg-3 md-2"></Col>
      <Col size="lg-6 md-8">
          <div id= "register-orgform"className="login-form text-center">
          <h2 className="page-title">Register Your Organization </h2>
            <label>Your Name:</label>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="name"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
            <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="title"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder=""
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label>Organization:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="orgName"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label>Website:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="website"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label>Details:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="details"
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
            <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="username"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
            <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder=""
                name="password"
                onChange={handleInputChange}
              />
              
            </div>
            <div className="text-center">
              <RegisterOrgBtn onClick={handleFormSubmit}>
                Register
              </RegisterOrgBtn>
              </div>
            {/* <h1>Upload Image</h1>
                    <div className="form-group">
                        
                        <label for="image"></label>
                        <input id="image" type="file" className="form-control" accept="image/png, image/jpeg" />
                    </div> */}

            
          </div>
          
        </Col>
        
        {/* <Col size="md-6">
          <div className="login-form text-center">
            
          </div>
        </Col> */}
        <Col size="lg-3 md-2"></Col>
      </Row>
    </Container>
  );
}
export default RegisterOrg;

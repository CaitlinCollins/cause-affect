import React, { useState } from "react";
import { Container, Row, Col } from "../Grid/grid";
import API from "../../utils/API";
import "../../App.scss";
import Modal from "../Modal";
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
        <h2 className="page-title">Register Your Organization </h2>
        <Col size="lg-6 md-8">
          <div className="login-form text-center">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Organization"
                name="orgName"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Website"
                name="website"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Details"
                name="details"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </Col>
        <Col size="md-6">
          <div className="login-form text-center">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            {/* <h1>Upload Image</h1>
                    <div className="form-group">
                        
                        <label for="image"></label>
                        <input id="image" type="file" className="form-control" accept="image/png, image/jpeg" />
                    </div> */}

            <div className="form-group">
              <RegisterOrgBtn onClick={handleFormSubmit}>
                Register
              </RegisterOrgBtn>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default RegisterOrg;

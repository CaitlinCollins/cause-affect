import React, { useState }  from "react";
import { Container, Row, Col } from "../Grid/grid";
import API from "../../utils/API";
import "./style.css";
import Modal from "../Modal";
import RegisterOrgBtn from "../RegisterOrgBtn";

function RegisterOrg() {
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
      }
      function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.email && formObject.orgName && formObject.website && formObject.username &&  formObject.password) {
          API.registerOrganization({
            name: formObject.name,
            title: formObject.title,
            email: formObject.email,
            orgName:formObject.orgName,
            website: formObject.website,
            details:formObject.details,
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
            <h1>Register your Organization </h1>
                <Col size="md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" 
                        name="name"
                        onChange={handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title"
                        name="title"
                        onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"
                        name="email"
                        onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Organization"
                        name="orgName"
                        onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Website"
                        name="website"
                        onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Details" 
                        name="details"
                        onChange={handleInputChange}/>
                    </div>
                
                </Col>
                <Col size="md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="User Name" 
                        name="username"
                        onChange={handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" 
                        name="password"
                        onChange={handleInputChange}/>
                    </div>
                    {/* <h1>Upload Image</h1>
                    <div className="form-group">
                        
                        <label for="image"></label>
                        <input id="image" type="file" className="form-control" accept="image/png, image/jpeg" />
                    </div> */}

                    <div className="form-group">
                
                <RegisterOrgBtn
                 
                 onClick={handleFormSubmit}
                >Register</RegisterOrgBtn>
              </div>

                </Col>



            </Row>
            <Modal/>
        </Container>
    )

}
export default RegisterOrg;
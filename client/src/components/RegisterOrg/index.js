import React from "react";
import { Container, Row, Col } from "../Grid/grid";
import "./style.css";
import Modal from "../Modal"

function RegisterOrg() {
    return (

        <Container>
            <Row>
            <h1>Register your Organization </h1>
                <Col size="md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Organization" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Website" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Details" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Volunteers Needed" />
                    </div>
                </Col>
                <Col size="md-6">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="image">Upload Image</label>
                        <input id="image" type="file" className="form-control" accept="image/png, image/jpeg" />
                    </div>

                    <button className="btn" type="submit">submit</button>

                </Col>



            </Row>
            <Modal/>
        </Container>
    )

}
export default RegisterOrg;
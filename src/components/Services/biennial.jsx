import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { Container, Col, Row } from 'react-bootstrap';

class Biennial extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      email: "",
      dot: "",
      description: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.number().required().label("Phone"),
    email: Joi.string().email().required().label("Email"),
    dot: Joi.number().required().label("DOT"),
    description: Joi.string(),
  };

  doSubmit = () => {
    console.log("form submitted");
  };

  render() {
    return (
      <div className="row jumbotron jumbotron-fluid pl-4 pr-3 layout">
        <Container>
          <Row>
            <Col className=" form-group mx-sm-3 mb-2 ">
              <h1>Biennial </h1>
              <p>
                The biennial update is a requirement set by the FMCSA to update
                your MCS-150 Form every two years. Most states require an update
                as part of renewing your truck/fleet registration.
              </p>
              <form >
                {this.renderInput("name", "Name")}
                {this.renderInput("phone", "Phone")}
                {this.renderInput("email", "Email")}
                {this.renderInput("dot", "DOT")}
                {this.renderInput("description", "Description")}
                {this.renderButton("Submit")}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Biennial;

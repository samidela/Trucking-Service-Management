import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class EligibilityCheck extends Form {
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
      <div className="row jumbotron jumbotron-fluid pl-4">
        <h1>Eligibility Checker </h1>
        <p className="container-fluid">
          Submit a copy of your driver license by attaching it below and we will
          let you know if you are eligible to drive with us. We will conduct a
          quick background check and we will send an email to let yoy know if we
          will move forward with you.
        </p>
        <form className=" layout ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          <label for="exampleInputFile">Upload Driver License </label>{" "}
          <input type="file" id="exampleInputFile"></input>
          <p className="help-block "></p> {this.renderButton("Submit")}
          <Button className="pr-4 btn btn-md float-right">
            <Link style={{ color: "#ffff" }} to="/futureDrivers/jobApplication">
              Job Application (HIRING)
            </Link>
          </Button>
        </form>
      </div>
    );
  }
}

export default EligibilityCheck;

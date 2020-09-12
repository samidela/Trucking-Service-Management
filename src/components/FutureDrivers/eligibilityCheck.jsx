import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

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
          let you know if you are eligible to drive with us. below and we will
          let you know if you are eligibl below and we will let you know if you
          are eligibl
        </p>
        <form className=" layout ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          <label for="exampleInputFile">Upload Here </label>{" "}
          <input type="file" id="exampleInputFile"></input>
          <p class="help-block"></p> {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EligibilityCheck;

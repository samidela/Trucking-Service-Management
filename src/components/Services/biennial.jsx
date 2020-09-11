import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

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
      <div className="row jumbotron jumbotron-fluid pl-4">
        <h1>Biennial </h1>
        <p>
          The biennial update is a requirement set by the FMCSA to update your
          MCS-150 Form every two years. Most states require an update as part of
          renewing your truck/fleet registration.
        </p>
        <form className=" layout ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("dot", "DOT")}
          {this.renderInput("description", "Description")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default Biennial;

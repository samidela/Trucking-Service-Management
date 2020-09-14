import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class Authority extends Form {
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
  };

  doSubmit = () => {
    console.log("form submitted");
  };

  render() {
    return (
      <div className="row jumbotron jumbotron-fluid pl-4 pr-3">
        <h1 className="widget-title">Get Your Authority </h1>
        <p className="container">
          So we heard you’re thinking about going fully independent. You’ve
          probably decided to get your own authority so you can cut out the
          middleman and keep more income for yourself while operating more
          independently.Having your own carrier authority means you have the
          government’s permission to get paid for hauling freight as your own
          trucking company.
        </p>
        <form className="col-xs-4 container column">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Submit")}
        </form>
        <div style={{ color: "red" }} className="column container pl-5">
          <ul style={{ color: "red" }} className="pr-3 float-right  ">
            <h3>Required Materials</h3>
            <li>MC</li>
            <li>Insured Truck and Trailer</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Authority;

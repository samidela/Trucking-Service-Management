import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class form2290 extends Form {
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
      <div className="row jumbotron jumbotron-fluid pl-4 pr-3">
        <h1>FORM 2290 (HVUT) </h1>
        <p>
          Heavy Highway Vehicle Use Tax Return or Form 2290 is a Federal Excise
          Tax imposed on vehicles operating in public highways with a gross
          weight of 55,000 pounds or more. Taxes are collected annually and are
          used for highway construction and maintenance.The purpose is to figure
          out and pay the tax due on a used taxable vehicle acquired and used
          during the period of July 2020 to July 2021.
        </p>
        <form className=" column ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("dot", "DOT")}
          {this.renderInput("description", "Description")}
          {this.renderButton("Submit")}
        </form>
        <div style={{ color: "red" }} className="column container pl-5">
          <h3>Required Materials</h3>
          <ul>
            <li>U.S DOT</li>
            <li>MC</li>
            <li>EIN</li>
            <li> Truck Owner Name</li>
            <li> Address</li>
            <li> Email</li>
            <li> Phone #</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default form2290;

import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class Ifta extends Form {
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
        <h1>Ifta </h1>
        <p>
          The IFTA tax matrix lists rates by jurisdiction and fuel type each
          fiscal quarter. After each quarter, you will complete a fuel tax
          report with your your IFTA jurisdiction office. This report will
          include all the miles you have travelled and gallons of fuel
          purchased. Any fuel taxes paid when purchasing fuel are credited to
          your account. You must file a return even if you traveled no miles and
          used no taxable fuel during the quarter.
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

export default Ifta;

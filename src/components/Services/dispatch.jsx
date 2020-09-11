import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class Dispatch extends Form {
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
      <div>
        <h1>Dispatch </h1>
        <p>
          If you plan on carrying cargo through more than one state, you will
          need to get an International Registration Plan (IRP). This allows you
          to haul loads through the contiguous 48 states and Canada with a
          single registration. You will receive an apportioned license plate.
          The registration fee is usually $1,500-$2,000, and varies by state and
          vehicle weight. Here is the state list with links to each
          jurisdiction.
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

export default Dispatch;

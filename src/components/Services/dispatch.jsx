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
      <div className="row jumbotron jumbotron-fluid pl-4">
        <h1>Dispatch </h1>
        <p>
          Truck dispatchers coordinate and manage the schedules of truck drivers
          to ensure products and goods are picked up and delivered in a timely
          manner. They receive calls for truck services and contact their fleet
          of truck drivers to arrange the pickups and deliveries.
        </p>
        <form className=" layout ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("dot", "DOT")}
          {this.renderInput("description", "Description (optional)")}
          {this.renderButton("Submit")}
          <br />
          <br />
          <p>Call or email Us to get a rate</p>
          
        </form>
      </div>
    );
  }
}

export default Dispatch;

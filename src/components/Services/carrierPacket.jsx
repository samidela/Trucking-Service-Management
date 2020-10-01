import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class CarrierPacket extends Form {
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
    dot: Joi.number().required().label("MC #"),
    description: Joi.string(),
  };

  doSubmit = () => {
    console.log("form submitted");
  };

  render() {
    return (
      <div className="row jumbotron jumbotron-fluid pl-4 pr-3">
        <h1>Carrier Packet </h1>
        <p >
          The Carrier Packet is an agreement between the carrier and the broker
          and it allows the carrier to carry out the load with principles in
          place. Call to have someone assist you in fillling it out.
        </p>
        <form className=" column ">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("mc", "MC #")}
          {this.renderInput("description", "Description (Optional)")}
          {this.renderButton("Submit")}
        </form>
        <div style={{ color: "red" }} className="column container pl-5">
          <h3>Required Materials</h3>
          <ul>
            <li>MC</li>
            <li>Insured Truck and Trailer</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CarrierPacket;

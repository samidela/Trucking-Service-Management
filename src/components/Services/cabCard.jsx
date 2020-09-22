import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class CabCard extends Form {
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
        <h1>IRP Cab Card </h1>
        <p className="container">
          If you plan on carrying cargo through more than one state, you will
          need to get an International Registration Plan (IRP). This allows you
          to haul loads through the contiguous 48 states and Canada with a
          single registration. You will receive an apportioned license plate.
          The registration fee is usually $1,500-$2,000, and varies by state and
          vehicle weight. Here is the state list with links to each
          jurisdiction. Cab Cards are yearly.
        </p>
        <form className="col-xs-4 container column">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("dot", "DOT #")}
          {this.renderInput("description", "Description of what you need.")}
          {
            <div className="form-group">
              {" "}
              <label for="exampleInputFile">Upload Here </label>{" "}
              <input type="file" id="exampleInputFile"></input>
              <p className="help-block"></p>{" "}
            </div>
          }
          {this.renderButton("Submit")}
        </form>

        <br />
        <div style={{ color: "red" }} className="column container pl-5">
          <ul style={{ color: "red" }} className="pr-3 float-right  ">
            <h5>Required Items*</h5>
            <li>Driver License</li>
            <li>SSN</li>
            <li>Title of Truck</li>
            <li>Apartment or House Lease </li>
            <li>Latest Utility Bill</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CabCard;

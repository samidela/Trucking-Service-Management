import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class JobApplication extends Form {
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
        <h1>Job Application </h1>
        <p>
          Gary Trucking LLC is constantly looking for talented individuals that
          can deliver the goods our customers need. If you are looking for an
          exciting opportunity with a company that's clearly going places. Apply
          today to see if you are eligible
        </p>
        <form className=" column container">
          {this.renderInput("name", "Name")}
          {this.renderInput("phone", "Phone")}
          {this.renderInput("email", "Email")}
          {this.renderInput("description", "Description")}
          {
            <div className="form-group">
              {" "}
              <label for="exampleInputFile">Upload Driver License </label>{" "}
              <input type="file" id="exampleInputFile"></input>
              <p className="help-block"></p>{" "}
            </div>
          }
          {this.renderButton("Submit")}
        </form>
        <div style={{ color: "red" }} className="column container pl-5">
          <h3>Requirements</h3>
          <ul>
            <li>21 years old and above</li>
            <li>Class A CDL</li>
            <li>1 year of experience (Preferred)</li>
            <li> Must Have a Clean Record</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default JobApplication;

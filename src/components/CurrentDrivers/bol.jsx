import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class BOL extends Form {
  state = {
    data: {
      name: "",
      load: "",
      email: "",
      dot: "",
      description: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.number().required().label("Load #"),
    email: Joi.string().email().required().label("Email"),
    dot: Joi.number().required().label("DOT"),
    description: Joi.string(),
  };

  doSubmit = () => {
    console.log("form submitted");
  };

  render() {
    return (
      <div className="row jumbotron jumbotron-fluid pl-4 pr-4">
        <h1>BOL </h1>
        <br />
        <p>
          Upload your Proof of Delivery below. We eill use the document to send
          it along with the rate of confirmation to the factoring company so
          that you are paid as quickly as possible.
        </p>

        <form className="col-xs-3 ">
          {this.renderInput("name", "Name")}
          {this.renderInput("load", "Load #")}
          <div className="form-group">
            {" "}
            <label for="exampleInputFile">Upload Here </label>{" "}
            <input type="file" id="exampleInputFile"></input>
            <p className="help-block"></p>{" "}
          </div>
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default BOL;

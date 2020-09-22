import React, { Component } from "react";
import "./login.css";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = ({ currentTarget: input }) => {
    const name = input.name;
    this.setState({ [name]: input.value });
    console.log(this.state[input.name]);
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { password } = this.state;
    return (
      <div className="login-page">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div>
            <label for="username" />
            <input
              type="text"
              id="username"
              name="name"
              className="form-control"
              placeHolder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="password" className="sr-only" />
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              placeHolder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

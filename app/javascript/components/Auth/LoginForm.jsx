import React, { Component } from "react";
import axios from "axios";
import { logInUser } from "./LoginUser";
class LoginForm extends Component {
  debugger
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
   
    const { email, password } = this.state;
    axios
      .post(
        "http://localhost:3001/auth/users/sign_in",
        { 
          user: {
            email: email,
            password: password
          }
        },
       { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          localStorage.setItem( "user", JSON.stringify(response.data.user));
          localStorage.setItem("token", response.headers.authorization);
          console.log(response.data.user)
          console.log(response.headers.authorization)
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm
import React, { Component } from "react";
import axios from "axios";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        name: "",
        surname: "",
        birthdate: "",
      email: "",
      password: "",
      registrationErrors: ""
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
    const { username, name, surname, birthdate, email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/api/v1/users",
        {
          user: {
              username: username,
              name: name,
              surname: surname,
              birthdate: birthdate,
            email: email,
            password: password,
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
         
          <input
            type="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />

          <input
            type="surname"
            name="surname"
            placeholder="Surname"
            value={this.state.surname}
            onChange={this.handleChange}
            required
          />
  
          <input
            type="birthdate"
            name="birthdate"
            placeholder="Birthdate"
            value={this.state.birthdate}
            onChange={this.handleChange}
            required
          />
      
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

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

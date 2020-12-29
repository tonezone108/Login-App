import React, { Component } from "react";
import { Redirect } from "react-router";
import { TextField, Button, Container } from "@material-ui/core";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleTextChange = e => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  displayLocalState = e => {
    e.preventDefault();
    const userObject = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(userObject);
  }


  login = (e) => {
    e.preventDefault();
    // alert('did it run?')
    const userObject = {
      username: this.state.username,
      userpassword: this.state.password
    };
    console.log("This is the userObject the Login.js component sent to actions: " + userObject)
    this.props.login(userObject);
    console.log(this.props.user.username)
  };


  componentDidUpdate() { 
    if(this.props.user.username){
      window.location.replace("/");
    }
    console.log(this.props.user.username)
  }


  render() {

    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              
            >
              Login
            </Button>
          </form>
        </Container>
        <Button onClick={this.login}>Use this button to login for now.</Button>
        <Button onClick={this.displayLocalState}>Use this button to test local state</Button>
      </div>
    );
  }
}

export default Login;

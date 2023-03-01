import React, { Component } from "react";

export class Loginform extends Component {
  render() {
    const { onButtonClick, login } = this.props;
    const buttonClicked = () => {
      onButtonClick();
    };
    return (
      <div>
        <center>
          {" "}
          <h1> Employee {login} Form </h1>{" "}
        </center>
        <form>
          <div>
            <label>Username: </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="userName"
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="pwd"
            />
            <button type="submit" onClick={buttonClicked}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Loginform;

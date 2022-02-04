import React from "react";
import Greeting from "./1_greeting";

function LoginButton(props) {
  return (
    <button onClick={props.onclick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onclick}>
      Logout
    </button>
  );
}

class ControlLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onclick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onclick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default ControlLogin;

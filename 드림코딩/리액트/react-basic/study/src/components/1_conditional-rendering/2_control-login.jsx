import React from "react";

function ButtonLogIn(props) {
  return <button onClick={props.onClick}>Log In</button>
}

function ButtonLogout(props) {
  return <button onClick={props.onClick}>Log Out</button>
}

export default class ControlLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const { isLoggedIn } = this.state;
    let button;
    if (isLoggedIn) {
      button = <ButtonLogout onClick={this.handleLogoutClick}/>
    } else {
      button = <ButtonLogIn onClick={this.handleLoginClick}/>
    }
    return (
      <>
        {button}
      </>
    )
  }
}


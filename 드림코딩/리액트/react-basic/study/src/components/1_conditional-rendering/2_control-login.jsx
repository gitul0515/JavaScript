import React from "react";
import Greeting from "./1_greeting";

function ButtonLogin(props) {
  return <button onClick={props.onLogIn}>LogIn</button>
}

function ButtonLogOut(props) {
  return <button onClick={props.onLogOut}>LogOut</button>
}

class ControlLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleToLogIn = () => {
    this.setState({isLoggedIn: true});
  }

  handleToLogOut = () => {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ButtonLogOut onLogOut={this.handleToLogOut}/>
    } else {
      button = <ButtonLogin onLogIn={this.handleToLogIn}/>
    }

    return (
      <>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </>
    )
  }
}

export default ControlLogin;

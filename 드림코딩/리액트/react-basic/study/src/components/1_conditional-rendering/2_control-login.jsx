import React from "react";
import { useState } from "react/cjs/react.development";
import Greeting from "./1_greeting";

function ButtonLogIn(props) {
  return <button onClick={props.onClick}>Log In</button>
}

function ButtonLogout(props) {
  return <button onClick={props.onClick}>Log Out</button>
}

const ControlLogin = () => {
  const [ isLoggedIn, SetIsLoggedIn ] = useState(false);

  let button;
  if (isLoggedIn) {
    button = <ButtonLogout onClick={() => SetIsLoggedIn(false)}/>
  } else {
    button = <ButtonLogIn onClick={() => SetIsLoggedIn(true)}/>
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
    </div>
  )
}

export default ControlLogin;

import { useState } from "react";
import Greeting from "./1_greeting";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

export default function ControlLogin() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  let button;
  if (isLoggedin) {
    button = <LogoutButton onClick={() => setIsLoggedin(false)}/>
  } else {
    button = <LoginButton onClick={() => setIsLoggedin(true)}/>
  }
  return (
    <div>
      <Greeting isLoggedin={isLoggedin}/>
      {button}
    </div>
  )
}

function UserGreeting() {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up!</h1>;
}

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

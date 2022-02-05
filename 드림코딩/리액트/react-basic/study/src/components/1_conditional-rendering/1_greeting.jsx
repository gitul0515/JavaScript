function GreetToUser() {
  return <h1>Welcome back!</h1>
}

function GreetToGuest() {
  return <h1>Please sign up.</h1>
}

export default function Greeting(props) {
  if (props.isLoggedin) {
    return <GreetToUser />
  } else {
    return <GreetToGuest />
  }
}
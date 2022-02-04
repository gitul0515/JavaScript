function ToUser() {
  return <h1>Welcome back!</h1>
}

function ToGuest() {
  return <h1>Please sign up.</h1>
}

export default function Greeting(props) {
  if (props.isLoggedIn) {
    return <ToUser />
  } else {
    return <ToGuest />
  }
}

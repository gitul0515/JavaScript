import { useEffect, useState } from "react";
import "./app.css";
import ControlLogin from "./components/1_conditional-rendering/2_control-login";

function ShowBtnClickCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked button ${count} times`
  });

  return (
    <div>
      <p>you clicked button {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me!</button>
    </div>
  )
}

export default function App() {
  return (
    <ControlLogin />
  );
}

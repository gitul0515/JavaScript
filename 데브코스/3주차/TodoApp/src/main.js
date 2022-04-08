import App from "./app.js";
import { getItem } from "./storage.js";

// const initialState = getItem('todos', [
//   { id: 1, text: "html", isCompleted: true },
//   { id: 2, text: "css", isCompleted: false },
//   { id: 3, text: "Javascript", isCompleted: false }
// ]);

const initialState = [
  // { id: 1, text: "html", isCompleted: true },
  // { id: 2, text: "css", isCompleted: false },
  // { id: 3, text: "Javascript", isCompleted: false }
];

const $app = document.querySelector('.app');

new App({
  $target: $app,
  initialState: initialState
});

import App from "./app.js";
import { getItem } from "./storage.js";

const initialState = getItem('todoData', {});

const $app = document.querySelector('.app');

const app = new App({
  $target: $app,
  initialState
});

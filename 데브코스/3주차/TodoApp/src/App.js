import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./storage.js";

export default class App {
  constructor({ $target, initialState }) {
    this.$target = $target;
    this.initialState = initialState;
    this.setup();
  }

  setup() {
    new Header({
      $target: this.$target,
      text: 'Simple Todo List'
    });

    new TodoForm({
      $target: this.$target,
      onSubmit: (text) => {
        todoList.add(text);
        setItem('todos', JSON.stringify(todoList.state));
      }
    });

    const todoList = new TodoList({
      $target: this.$target,
      initialState: this.initialState
    });
  }
}

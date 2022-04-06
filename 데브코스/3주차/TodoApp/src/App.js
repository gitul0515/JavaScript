import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import { setItem } from "./storage.js";

export default class App {
  #state = [];

  constructor({ $target, initialState }) {
    this.$target = $target;
    this.#state = initialState;
    this.setup();
  }

  setState(newState) {
    this.#state = newState;
    this.todoList.setState(this.#state);
    // this.todoCount.setState(this.#state);
  }

  setup() {
    this.header = new Header({
      $target: this.$target,
      text: 'Simple Todo List'
    });

    this.todoForm = new TodoForm({
      $target: this.$target,
      onSubmit: (text) => {
        this.setState([
          ...this.#state,
          { text, isCompleted: false }
        ]);
        setItem('todos', JSON.stringify(this.#state));
      }
    });

    this.todoList = new TodoList({
      $target: this.$target,
      initialState: this.#state,
      onClickTodo: id => {
        console.log(id);
      },
      onClickButton: id => {
        console.log(id);
      }
    });

    // this.todoCount = new TodoCount({
    //   $target: this.$target,
    //   initialState: this.#state
    // })
  }
}

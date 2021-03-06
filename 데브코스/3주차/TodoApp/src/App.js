import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import { setItem } from "./storage.js";

export default class App {
  #state = [];
  id = 1;

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
          { id: this.id, text, isCompleted: false }
        ]);
        this.id += 1;
        // setItem('todos', JSON.stringify(this.#state));
      }
    });

    this.todoList = new TodoList({
      $target: this.$target,
      initialState: this.#state,
      onClickText: id => {
        this.setState(this.#state.map(todo => {
          if (todo.id === id) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo;
        }))
      },
      onClickButton: id => {
        this.setState(this.#state.filter(todo => todo.id !== id));
      }
    });

    // this.todoCount = new TodoCount({
    //   $target: this.$target,
    //   initialState: this.#state
    // })
  }
}

import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import { setItem } from "./storage.js";

export default class App {
  #state = [];

  constructor({ $target, initialState }) {
    if(!Array.isArray(initialState)) {
      throw new Error('The type of initialState must be an Array');
    }
    this.$target = $target;
    this.#state = initialState;
    this.init();
  }

  setState(newState) {
    if(!Array.isArray(newState)) {
      throw new Error('The type of newState must be an Array');
    }
    this.#state = newState;
    this.todoList.setState(this.#state);
    this.todoCount.setState(this.#state);
    setItem('todoData', JSON.stringify(this.#state));
  }

  init() {
    this.header = new Header({
      $target: this.$target,
      text: 'Simple Todo List'
    });

    this.todoForm = new TodoForm({
      $target: this.$target,
      onSubmit: (text) => {
        this.setState([
          ...this.#state,
          { id: this.createUniqueID(), text, isCompleted: false }
        ]);
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

    this.todoCount = new TodoCount({
      $target: this.$target,
      initialState: this.#state
    })
  }

  static createUniqueID () {
    return Math.floor(new Date().valueOf() * Math.random());
  }
}

import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoComments from "./TodoComments.js";
import { request } from "./api.js";

export default class App {
  constructor({ $target }) {
    this.$target = $target;
    this.setup();
    this.init();
  }

  #state = {
    todos: [],
    selectedTodo: null,
    comments: []
  }

  setState(newState) {
    this.#state = newState;
    this.todoList.setState(this.#state.todos);
    this.todoComments.setState({
      selectedTodo: this.#state.selectedTodo,
      comments: this.#state.comments
    })
  }

  setup() {
    new Header({
      $target: this.$target,
      text: 'Simple Todo List'
    });

    new TodoForm({
      $target: this.$target,
      onSubmit: (text) => {
        this.todoList.add(text);
      }
    });

    this.todoList = new TodoList({
      $target: this.$target,
      initialState: this.#state.todos,
      onClick: id => {
        const selectedTodo = this.#state.todos.find(todo => todo.id === id);
        this.setState({
          ...this.#state,
          selectedTodo
        })

        request(`https://kdt.roto.codes/comments?todo.id=${id}`)
          .then(data => {
            this.setState({
              ...this.#state,
              comments: data
            })
          })
      }
    });

    this.todoComments = new TodoComments({
      $target: this.$target,
      initialState: {
        selectedTodo: this.#state.selectedTodo,
        comments: this.#state.comments
      }
    });
  }

  init() {
    request('https://kdt.roto.codes/todos')
      .then(todos => {
        this.setState({
          ...this.#state,
          todos
        })
      })
  }
}

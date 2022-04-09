import { request } from "./api.js";
import UserList from "./UserList.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({
  $target
}) {
  this.state = {
    username: 'gihong',
    todos: [],
    isLoading: false
  }

  const userList = new UserList({
    $target,
    initialState: ['User1', 'User2', 'User3'],
    onSelect: text => {
      console.log(text);
    }
  });
  
  const header = new Header({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      username: this.state.username
    }
  })

  new TodoForm({
    $target,
    onSubmit: async content => {
      const todo = {
        content,
        isCompleted: false
      }
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          todo
        ]
      })
      await request(`/${this.state.username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      await fetchTodos();
    }
  })
  
  const todoList = new TodoList({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      todos: this.state.todos
    },
    onToggle: async id => {
      const todoIndex = this.state.todos.findIndex(todo => todo._id === id);
      const nextTodos = [...this.state.todos];
      nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted;
      this.setState({
        ...this.state,
        todos: nextTodos
      })
      await request(`/${this.state.username}/${id}/toggle`, {
        method: 'PUT'
      });
      await fetchTodos();
    },
    onRemove: async id => {
      const nextTodos = this.state.todos.filter(todo => todo._id !== id);
      this.setState({
        ...this.state,
        todos: nextTodos
      })
      await request(`/${this.state.username}/${id}`, {
        method: 'DELETE'
      });
      await fetchTodos();
    },
  });

  const fetchTodos = async () => {
    const { username } = this.state;
    this.setState({
      ...this.state,
      isLoading: true
    })
    if (username) {
      const todos = await request(`/${username}`);
      this.setState({
        ...this.state,
        todos,
        isLoading: false
      })
    }
  }

  this.setState = nextState => {
    this.state = nextState;
    header.setState({
      username: this.state.username,
      isLoading: this.state.isLoading
    })
    todoList.setState({
      isLoading: this.state.isLoading,
      todos: this.state.todos
    });
  }

  fetchTodos();
}
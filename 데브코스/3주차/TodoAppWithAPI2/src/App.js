import { request } from "./api.js";
import UserList from "./UserList.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({
  $target
}) {
  const $userListContainer = document.createElement('div');
  const $todoListContainer = document.createElement('div');

  $target.appendChild($userListContainer);
  $target.appendChild($todoListContainer);

  this.state = {
    userList: [],
    selectedUsername: null,
    todos: [],
    isLoading: false
  }

  const userList = new UserList({
    $target: $userListContainer,
    initialState: this.state.userList,
    onSelect: async username => {
      history.pushState(null, null, `/?selectedUsername=${username}`);
      this.setState({
        ...this.state,
        selectedUsername: username
      });
      await fetchTodos();
    }
  });
  
  const header = new Header({
    $target: $todoListContainer,
    initialState: {
      isLoading: this.state.isLoading,
      selectedUsername: this.state.selectedUsername
    }
  })

  new TodoForm({
    $target: $todoListContainer,
    onSubmit: async content => {
      const isFirstTodoAdd = this.state.todos.length === 0;
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
      await request(`/${this.state.selectedUsername}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      await fetchTodos();

      if (isFirstTodoAdd) {
        await fetchUserList();
      }
    }
  })
  
  const todoList = new TodoList({
    $target: $todoListContainer,
    initialState: {
      isLoading: this.state.isLoading,
      selectedUsername: this.state.selectedUsername,
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
      await request(`/${this.state.selectedUsername}/${id}/toggle`, {
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
      await request(`/${this.state.selectedUsername}/${id}`, {
        method: 'DELETE'
      });
      await fetchTodos();
    },
  });

  const fetchUserList = async () => {
    const userList = await request('/users');
    this.setState({
      ...this.state,
      userList
    })
  };

  const fetchTodos = async () => {
    const { selectedUsername } = this.state;
    this.setState({
      ...this.state,
      isLoading: true
    })
    if (selectedUsername) {
      const todos = await request(`/${selectedUsername}`);
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
      selectedUsername: this.state.selectedUsername,
      isLoading: this.state.isLoading
    })
    todoList.setState({
      isLoading: this.state.isLoading,
      selectedUsername: this.state.selectedUsername,
      todos: this.state.todos
    });
    userList.setState(this.state.userList);
    this.render();
  }

  this.render = () => {
    const { selectedUsername } = this.state;
    $todoListContainer.style.display = selectedUsername ? 'block' : 'none';
  }

  const init = async () => {
    await fetchUserList();

    // url에 특정 사용자를 나타내는 값이 있을 경우
    if (pathname.length > 1 && pathname.length < 10) {
      this.setState({
        ...this.state,
        selectedUsername: pathname.substring(1)
      })
      await fetchTodos();
    }
  }
  this.render();
  init();
}
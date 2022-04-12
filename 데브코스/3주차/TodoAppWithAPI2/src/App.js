import { request } from "./api.js";
import UserList from "./UserList.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { parse } from "./queryString.js";

export default function App({
  $target
}) {
  if (!new.target) {
    return new App({$target});
  }

  const $userListContainer = document.createElement('div');
  const $todoListContainer = document.createElement('div');

  $target.appendChild($userListContainer);
  $target.appendChild($todoListContainer);

  this.state = {
    userList: [],
    selectedUser: null,
    todos: [],
    isLoading: false
  }

  const userList = new UserList({
    $target: $userListContainer,
    initialState: this.state.userList,
    onSelect: async username => {
      history.pushState(null, null, `/?selectedUser=${username}`);
      this.setState({
        ...this.state,
        selectedUser: username
      });
      await fetchTodos();
    }
  });
  
  const header = new Header({
    $target: $todoListContainer,
    initialState: {
      isLoading: this.state.isLoading,
      selectedUser: this.state.selectedUser
    }
  })

  new TodoForm({
    $target: $todoListContainer,
    onSubmit: async content => {
      const isFirstTodoAdd = this.state.todos.length === 0;
      const todo = {
        content,
      }
      this.setState({
        ...this.state,
        todos: [
          ...this.state.todos,
          todo
        ]
      })
      await request(`/${this.state.selectedUser}`, {
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
      selectedUser: this.state.selectedUser,
      todos: this.state.todos
    },
    onToggle: async id => {
      const nextTodos = this.state.todos.map(todo => {
        if (todo._id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      });
      this.setState({
        ...this.state,
        todos: nextTodos
      })
      await request(`/${this.state.selectedUser}/${id}/toggle`, {
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
      await request(`/${this.state.selectedUser}/${id}`, {
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
    const { selectedUser } = this.state;
    this.setState({
      ...this.state,
      isLoading: true
    })
    if (selectedUser) {
      const todos = await request(`/${selectedUser}`);
      this.setState({
        ...this.state,
        todos,
        isLoading: false
      })
    }
  }

  this.setState = nextState => {
    this.state = nextState;
    userList.setState(this.state.userList);
    header.setState({
      selectedUser: this.state.selectedUser,
      isLoading: this.state.isLoading
    })
    todoList.setState({
      selectedUser: this.state.selectedUser,
      isLoading: this.state.isLoading,
      todos: this.state.todos
    });
    this.render();
  }

  this.render = () => {
    const { selectedUser } = this.state;
    $todoListContainer.style.display = selectedUser ? 'block' : 'none';
  }

  const init = async () => {
    await fetchUserList();

    // queryString에 특정 사용자를 나타내는 값이 있을 경우
    const search = decodeURI(location.search);
    const { selectedUser } = parse(search.substring(1));
    if (selectedUser) {
      this.setState({
        ...this.state,
        selectedUser
      })
      await fetchTodos();
    }
  }
  this.render();
  init();
  window.addEventListener('popstate', () => init());
}
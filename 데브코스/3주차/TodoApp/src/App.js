import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({ $target, initialState }) {
  new Header({
    $target,
    text: 'Simple Todo List'
  });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      todoList.add(text);
    }
  });

  const todoList = new TodoList({
    $target,
    initialState
  });
}

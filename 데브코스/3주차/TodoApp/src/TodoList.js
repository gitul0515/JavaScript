export default class TodoList {
  #state = [];

  constructor({ $target, initialState, onClickTodo, onClickButton }) {
    this.$target = $target; 
    this.#state = initialState;
    this.onClickTodo = onClickTodo;
    this.onClickButton = onClickButton;
    this.setup();
  }

  setState(newState) {
    this.#state = newState;
    this.render();
  }

  setup() {
    this.$todoList = document.createElement('div');
    this.render();
    this.bindEvent();
    this.$target.appendChild(this.$todoList);
  }

  render() {
    this.$todoList.innerHTML = this.getHtml();
  }

  getHtml() {
    return `<ul>
    ${this.#state.map(({ id, text, isCompleted }) => {
      if (isCompleted) {
        return `<li>${text}</li>`;
      } else {
        return `<li style="text-decoration: line-through">${text}</li>`;
      }
    }).join('')}
    </ul>` 
  }

  bindEvent() {
    this.$todoList.querySelector('ul').addEventListener('click', e => {
      if (e.target.matches('li')) {
        const { id } = e.target.dataset;
        this.onClickTodo(parseInt(id, 10));
        return;
      } 
      if (e.target.matches('button')) {
        const { id } = e.target.dataset;
        this.onClickButton(parseInt(id, 10));
        return;
      }
    })
  }
}

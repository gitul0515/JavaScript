export default class TodoList {
  #state = [];

  constructor({ $target, initialState, onClickText, onClickButton }) {
    this.$target = $target; 
    this.#state = initialState;
    this.onClickText = onClickText;
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
    this.$target.appendChild(this.$todoList);
  }

  render() {
    this.$todoList.innerHTML = this.getHtml();
    this.setStyle();
    this.bindEvent();
  }

  getHtml() {
    console.log(this.#state);
    return `<ul>
    ${this.#state.map(({ id, text, isCompleted }) => {
      return `<li data-id=${id} data-completed=${isCompleted}>
        <span>${text}</span>
        <button data-id=${id}>삭제</button>
      </li>`;
    }).join('')}
    </ul>` 
  }

  setStyle() {
    this.$todoList.querySelectorAll('li').forEach(li => {
      const { completed } = li.dataset;
      const text = li.querySelector('span');
      text.style.textDecoration = completed === 'true' ? 'line-through' : '';
    })
  }

  bindEvent() {
    this.$todoList.querySelector('ul').addEventListener('click', e => {
      if (e.target.matches('li')) {
        const { id } = e.target.dataset;
        this.onClickText(parseInt(id, 10));
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

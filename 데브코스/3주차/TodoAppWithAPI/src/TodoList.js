export default class TodoList {
  #state;
  get state() { return this.#state; }

  constructor({ $target, initialState, onClick }) {
    this.$target = $target; 
    this.#state = initialState;
    this.onClick = onClick;
    this.setup();
  }

  setup() {
    this.$todoList = document.createElement('div');
    this.render();
    this.bindEvent();
    this.$target.appendChild(this.$todoList);
  }

  render() {
    this.$todoList.innerHTML = this.getHtml();
    this.bindEvent();
  }

  getHtml() {
    return this.#state.reduce((html, { text, id }) => {
      html += `<li data-id="${id}">${text}</li>`;
      return html;
    }, '<ul>') + '</ul>';
  }

  bindEvent() {
    this.$todoList.querySelectorAll('li').forEach($li => {
      $li.addEventListener('click', e => {
        const { id } = e.target.dataset;
        this.onClick(parseInt(id, 10));
      })
    })
  }

  add(text) {
    this.setState([
      ...this.#state,
      { text }
    ]);
  }

  setState(newState) {
    this.#state = newState;
    this.render();
  }
}

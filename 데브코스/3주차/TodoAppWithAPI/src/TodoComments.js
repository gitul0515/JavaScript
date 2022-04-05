export default class TodoComments {
  #state = [];

  constructor({ $target, initialState }) {
    this.$target = $target;
    this.#state = initialState;
    this.setup();
  }

  setup() {
    this.$element = document.createElement('div');
    this.render();
    this.$target.appendChild(this.$element);
  }

  render() {
    const { selectedTodo, comments } = this.#state;
    if (!selectedTodo || !comments) {
      this.$element.innerHTML = '';
      return;
    }
    this.$element.innerHTML = `
      <h2>${selectedTodo.text}의 댓글들</h2>
      ${comments.length === 0 ? '댓글이 없습니다.' : ''}
      <ul>
        ${comments.map(({ content }) => `<li>${content}</li>`).join('')}
      </ul>
    `
  }

  setState(newState) {
    this.#state = newState;
    this.render();
  }
}
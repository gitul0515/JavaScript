export default class TodoCount {
  #state = [];

  constructor({ $target, initialState }) {
    if (!Array.isArray(initialState)) {
      throw new Error('The type of initialState must be an Array');
    }
    this.$target = $target;
    this.#state = initialState;
    this.init();
  }

  setState(newState) {
    if (!Array.isArray(newState)) {
      throw new Error('The type of newState must be an Array');
    }
    this.#state = newState;
    this.render();
  }

  init() {
    this.$dl = document.createElement('dl');
    this.render();
    this.$target.appendChild(this.$dl);
  }

  render() {
    const completedCount = this.#state.filter(todo => todo.isCompleted).length;
    const totalCount = this.#state.length;
    this.$dl.innerHTML = TodoCount.getHtml(completedCount, totalCount);
  }

  static getHtml(completedCount, totalCount) {
    return `
      <dt>완료</dt>
      <dd>${completedCount}개</dd>
      <dt>전체</dt>
      <dd>${totalCount}개</dd>
    `;
  }
}

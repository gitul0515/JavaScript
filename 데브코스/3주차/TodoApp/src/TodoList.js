export default class TodoList {
  constructor({ $target, initialState }) {
    this.$target = $target; 
    this.state = initialState;
    this.setup();
  }

  setup() {
    this.$todoList = document.createElement('div');
    this.render();
    this.$target.appendChild(this.$todoList);
  }

  render() {
    this.$todoList.innerHTML = this.getHtml();
  }

  getHtml() {
    return this.state.reduce((html, { text }) => {
      html += `<li>${text}</li>`;
      return html;
    }, '<ul>') + '</ul>';
  }

  add(text) {
    this.setState([
      ...this.state,
      { text }
    ]);
  }

  setState(newState) {
    this.state = newState;
    this.render();
  }
}

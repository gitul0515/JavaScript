export default class TodoForm {
  #isInit = false;

  constructor({ $target, onSubmit }) {
    this.$target = $target;
    this.onSubmit = onSubmit;
    this.#init();
  }

  #init() {
    if (this.#isInit) {
      return;
    }
    this.$form = document.createElement('form');
    this.render();
    this.bindEvent();
    this.$target.appendChild(this.$form);
    this.#isInit = true;
  }

  render() {
    this.$form.innerHTML = `
      <input type="text" name="todo" />
      <button >Add</button>
    `;
  }

  bindEvent() {
    this.$form.addEventListener('submit', e => {
      e.preventDefault();
      const text = this.$form.querySelector('input[name=todo]').value;
      if (text.length > 1) {
        this.onSubmit(text);
        this.$form.reset();
      }
    });
  }
}

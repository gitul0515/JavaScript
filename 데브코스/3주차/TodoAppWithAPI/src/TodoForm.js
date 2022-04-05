export default class TodoForm {
  #isInit = false;

  constructor({ $target, onSubmit }) {
    this.$target = $target;
    this.onSubmit = onSubmit;
    this.setup();
  }

  setup() {
    this.$form = document.createElement('form');
    this.render();
    !this.#isInit && this.bindEvent();
    this.$target.appendChild(this.$form);
  }

  render() {
    this.$form.innerHTML = `
      <input type="text" name="todo" />
      <button >Add</button>
    `
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
    this.#isInit = true;
  }
}

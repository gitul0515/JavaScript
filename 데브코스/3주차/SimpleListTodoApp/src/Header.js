export default class Header {
  constructor({ $target, text }) {
    this.$target = $target;
    this.text = text;
    this.init();
  }

  init() {
    this.$header = document.createElement('h1');
    this.render();
    this.$target.appendChild(this.$header);
  }

  render() {
    this.$header.textContent = this.text;
  }
}

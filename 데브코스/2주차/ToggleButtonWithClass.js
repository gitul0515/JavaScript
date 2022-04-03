class ToggleButton {
  isInit = false;
  state = {
    clickCount: 0,
    toggled: false
  };

  constructor({target, text}) {
    this.target = target;
    this.text = text;
    this.setup();
  }

  setup() {
    if (!this.isInit) {
      this.button = document.createElement('button');
      this.render();
      this.bindEvent();
      this.target.appendChild(this.button);
      this.isInit = true;
    }
  }

  render() {
    this.button.textContent = this.text;
    this.button.style.fontWeight = this.state.toggled ? 'bold' : 'normal';
  }

  bindEvent() {
    this.button.addEventListener('click', () => this.setState());
  }

  setState() {
    this.state = {
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled
    }
    this.render();
  }
}

const button = new ToggleButton({
  target: document.querySelector('body'),
  text: 'Button1'
});

class ToggleButton {
  isInit = false;
  state = {
    clickCount: 0,
    toggled: false
  };

  constructor({target, text, onClick}) {
    this.target = target;
    this.text = text;
    this.onClick = onClick;
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
    this.button.addEventListener('click', () => {
      this.setState();
      this.onClick && this.onClick(this.state.clickCount);
    });
  }

  setState() {
    this.state = {
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled
    }
    this.render();
  }
}

class TimerToggleButton extends ToggleButton {
  constructor({target, text, onClick, timer}) {
    super({target, text, onClick});
    this.timer = timer;
    this.setInterval();
  }

  setInterval() {
    setInterval(() => {
      this.state = {
        ...this.state,
        toggled: !this.state.toggled
      }
      this.render();
    }, this.timer);
  }
}

class ToggleButtonGroup {
  constructor({target, buttons}) {
    this.target = target;
    this.buttons = buttons;
    this.setup();
  }

  setup() {
    this.group = document.createElement('div');
    this.createButtons();
    this.target.appendChild(this.group);
  }

  createButtons() {
    this.buttons.forEach(({ type, ...props }) => {
      switch (type) {
        case 'toggle':
          new ToggleButton({ target: this.group, ...props });
          break;
        case 'timerToggle':
          new TimerToggleButton({ target: this.group, ...props });
          break;     
        default:
          throw new Error('invalid type');
      }
    });
  }
}

new ToggleButtonGroup({
  target: document.querySelector('body'),
  buttons: [
    {
      type: 'toggle',
      text: 'Button1'
    },
    {
      type: 'toggle',
      text: 'Button2',
      onClick: clickCount => {
        if (clickCount % 3 === 0) {
          alert('세 번째 클릭입니다.');
        }
      }
    },
    {
      type: 'timerToggle',
      text: 'TimerButton1',
      timer: 1000
    }
  ]
});

function ToggleButton({
  target,
  text,
  onClick
}) {
  const button = document.createElement('button');

  this.state = {
    clickCount: 0,
    toggled: false
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }
  
  this.render = () => {
    button.textContent = text; // 
    button.style.textDecoration = this.state.toggled ? 'line-through' : '';
  }

  button.addEventListener('click', () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled
    });
    onClick && onClick(this.state.clickCount);
  })
  this.render();
  target.appendChild(button);
}

function TimerToggleButton({
  target,
  text,
  onClick,
  timer = 2000
}) {
  const button = new ToggleButton({ target, text, onClick });
  setInterval(() => {
    button.setState({
      ...button.state,
      toggled: !button.state.toggled
    });
  }, timer);
}

function ToggleButtonGroup({
  target,
  buttons
}) {
  const group = document.createElement('div');

  this.render = function() {
    buttons.forEach(({type, ...props}) => {
      if (type === 'toggle') {
        new ToggleButton({ target: group, ...props });
      } else {
        new TimerToggleButton({ target: group, ...props });
      }
    });
  }

  let isInit = false;
  if (!isInit) {
    this.render();
    isInit = true;
  }
  target.appendChild(group);
}

new ToggleButtonGroup({
  target: document.querySelector('body'),
  buttons: [
    {
      type: 'toggle',
      text: 'Button1',
    },
    {
      type: 'toggle',
      text: 'Button2',
      onClick: clickCount => {
        if (clickCount % 3 === 0) {
        alert('세 번째 클릭!');
        }
      }
    },
    {
      type: 'timerToggle',
      text: 'timerButton1',
      timer: 1000,
    }
  ]
});

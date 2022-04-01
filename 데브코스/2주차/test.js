function ToggleButton({ 
  target, 
  text 
}) {
  const button = document.createElement('button');
  let isInit = false;

  const render = () => {
    button.textContent = text;
    target.appendChild(button);
    button.addEventListener('click', () => {
      if (button.style.textDecoration === 'line-through') {
        button.style.textDecoration = '';
      } else {
        button.style.textDecoration = 'line-through'
      }
    })
    isInit = true;
  }
  render();
}

const button1 = new ToggleButton({
  target: document.querySelector('body'),
  text: 'Button1'
});

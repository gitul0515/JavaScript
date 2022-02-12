const buttons = [...document.querySelectorAll('input[type=radio]')];
let i = 0;
let curButton = buttons[i];

setInterval(() => {
  curButton.removeAttribute('checked');
  curButton = buttons[++i];
  curButton.setAttribute('checked', '');
  if (i >= 2) i = -1;
}, 2000);

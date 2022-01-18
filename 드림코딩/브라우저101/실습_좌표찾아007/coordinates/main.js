const coord = document.querySelector('.coordinates');
const coordText = document.querySelector('.coordinates__text');

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  coord.style.left = `${x}px`;
  coord.style.top = `${y}px`;

  coordText.innerHTML = `${x}px, ${y}px`;
});

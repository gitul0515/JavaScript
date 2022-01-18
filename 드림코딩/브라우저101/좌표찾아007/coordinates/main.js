const coord = document.querySelector('.coordinates');
const coordText = document.querySelector('.coordinates__text');

document.addEventListener('mousemove', e => {
  coord.style.left = `${e.pageX}px`;
  coord.style.top = `${e.pageY}px`;

  coordText.innerHTML = `${e.pageX}px, ${e.pageY}px`;
});

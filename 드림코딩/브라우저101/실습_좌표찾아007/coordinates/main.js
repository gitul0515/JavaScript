const coord = document.querySelector('.coordinates');
const coordText = document.querySelector('.coordinates__text');

document.addEventListener('mousemove', e => {
  const rect = coord.getBoundingClientRect();
  const x = e.clientX - rect.width / 2;
  const y = e.clientY - rect.height / 2;
  coord.style.transform = `translate(${x - 6}px, ${y - 5}px)`;
  coordText.innerHTML = `${x}px, ${y}px`;
});

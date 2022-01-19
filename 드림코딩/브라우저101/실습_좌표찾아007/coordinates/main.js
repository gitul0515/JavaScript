const coord = document.querySelector('.coordinates');
const coordText = document.querySelector('.coordinates__text');

window.addEventListener('load', () => {
  const coordRect = coord.getBoundingClientRect();

  document.addEventListener('mousemove', e => {
    const x = e.clientX - coordRect.width / 2 - 6;
    const y = e.clientY - coordRect.height / 2 - 5;

    coord.style.transform = `translate(${x}px, ${y}px)`;
    coordText.innerHTML = `${e.clientX}px, ${e.clientY}px`;
  });
});

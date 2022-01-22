const box = document.querySelector('.box');
const initialMousePos = { x: 0, y: 0 };
const offSet = { x: 0, y: 0 };

function move(e) {
  offSet.x = e.clientX - initialMousePos.x;
  offSet.y = e.clientY - initialMousePos.y;

  box.style.transform = `translate(${offSet.x}px, ${offSet.y}px)`;
}

box.addEventListener('mousedown', e => {
  initialMousePos.x = e.clientX - offSet.x;
  initialMousePos.y = e.clientY - offSet.y;

  document.addEventListener('mousemove', move);
});

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', move);
});

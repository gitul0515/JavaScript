// 수직형 무한 슬라이드 배너
const slideInner = document.querySelector('.slide-inner');
let curSlide = slideInner.firstElementChild;
let curSlideIndex = 0;
let offSetY;

let timeId = setInterval(() => {
  moveSlideInner();
}, 2000);

function moveSlideInner() {
  slideInner.appendChild(curSlide.cloneNode(true));

  // slideInner를 offSetY만큼 이동한다.
  offSetY = -500 * (++curSlideIndex);
  slideInner.style.transform = `translateY(${offSetY}px)`;

  curSlide = slideInner.children[curSlideIndex];
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', event => {
  const { target: button } = event;
  if (button.className === 'buttons') return;

  const distance = Number(button.dataset.order) - Number(curSlide.dataset.order);
  if (distance === 0) {
    return;
  } else {
    clearInterval(timeId);
    offSetY -= distance * 500;
    slideInner.style.transform = `translateY(${offSetY}px)`;
    curSlideIndex += distance;
    curSlide = slideInner.children[curSlideIndex];
  }
});

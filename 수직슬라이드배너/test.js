/* eslint-disable no-use-before-define */
// 수직형 무한 슬라이드 배너
const slideInner = document.querySelector('.slide-inner');
let curSlide = slideInner.children[0];
let curSlideIndex = 0;
let offSetY;

let timeId = setInterval(() => {
  moveSlideInner();
}, 2000);

function moveSlideInner() {
  copyCurSlide();

  // slideInner를 offSetY만큼 이동한다.
  offSetY = -500 * (++curSlideIndex);
  slideInner.style.transform = `translateY(${offSetY}px)`;
}

function copyCurSlide() {
  // 현재 배너를 slideInner의 마지막 자식으로 복사한다.
  curSlide = slideInner.children[curSlideIndex];
  slideInner.appendChild(curSlide.cloneNode(true));
}

const buttons = document.querySelector('.buttons');
console.log(buttons);
buttons.addEventListener('click', e => {
  const { target: button } = e;
  button.classList.add('fontsize-up');
  if (button.className === 'buttons') return;
  console.log(button.dataset.order);
  console.log((Number(curSlide.dataset.order + 1) % 3));

  // clearInterval(timeId);
  // timeId = setInterval(() => {
  //   if (button.dataset.order === curSlide.dataset.order) {
  //     button.classList.remove('fontsize-up');
  //   }
  //   moveSlideInner();
  // }, 500);
});

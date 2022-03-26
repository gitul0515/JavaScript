// 수직형 무한 슬라이드 배너
const slideInner = document.querySelector('.slide-inner');
const slides = [...slideInner.children];
let curSlide = slideInner.firstElementChild;
let curSlideIndex = 0;
let offSetY;

let timeId;
timeId = setInterval(() => {
  moveSlideInner();
}, 2000);

function moveSlideInner() {
  // slides를 slideInner의 자식으로 복사한다. 
  copySlides(slides);

  // slideInner를 offSetY만큼 이동한다.
  offSetY = -500 * (++curSlideIndex);
  slideInner.style.transition = '2s ease';
  slideInner.style.transform = `translateY(${offSetY}px)`;

  // 현재 슬라이드를 갱신한다. 
  curSlide = slideInner.children[curSlideIndex];
}

function copySlides(slides) {
  if(curSlideIndex % 3 === 2) {
    slides.forEach(slide => {
      slideInner.appendChild(slide.cloneNode(true));
    });
  }
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', event => {
  const button = event.target;
  if (button.nodeName !== 'BUTTON') return;
  if (timeId === undefined) return;

  const distance = Number(button.dataset.order) - Number(curSlide.dataset.order);
  if (distance === 0) {
    return;
  } else {
    offSetY -= distance * 500;
    slideInner.style.transition = '1s ease';
    slideInner.style.transform = `translateY(${offSetY}px)`;
    curSlideIndex += distance;
    curSlide = slideInner.children[curSlideIndex];

    button.classList.add('clicked');
    timeId = clearInterval(timeId);
    // 현재 슬라이드에서 3초를 대기한 뒤, 
    // 다시 setInterval을 호출한다. 
    setTimeout(() => {
      timeId = setInterval(() => {
        button.classList.remove('clicked');
        moveSlideInner();
      }, 2000);
    }, 3000);
  }
});

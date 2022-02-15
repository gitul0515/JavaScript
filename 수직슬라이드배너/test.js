/* eslint-disable no-use-before-define */
// 수직형 무한 슬라이드 배너
const bannerInner = document.querySelector('.banner-inner');
let curBanner = bannerInner.children[0];
let curBannerIndex = 0;
let offSetY;

let timeId = setInterval(() => {
  moveBannerInner();
}, 2000);

function moveBannerInner() {
  copyCurBanner();

  // bannerInner를 offSetY만큼 이동한다.
  offSetY = -500 * (++curBannerIndex);
  bannerInner.style.transform = `translateY(${offSetY}px)`;
}

function copyCurBanner() {
  // 현재 배너를 bannerInner의 마지막 자식으로 복사한다.
  curBanner = bannerInner.children[curBannerIndex];
  bannerInner.appendChild(curBanner.cloneNode(true));
}

const buttons = document.querySelector('.buttons');
console.log(buttons);
buttons.addEventListener('click', e => {
  const { target: button } = e;
  button.classList.add('fontsize-up');
  if (button.className === 'buttons') return;
  console.log(button.dataset.order);
  console.log((Number(curBanner.dataset.order + 1) % 3));

  // clearInterval(timeId);
  // timeId = setInterval(() => {
  //   if (button.dataset.order === curBanner.dataset.order) {
  //     button.classList.remove('fontsize-up');
  //   }
  //   moveBannerInner();
  // }, 500);
});

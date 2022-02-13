// 수직형 무한 슬라이드 배너
const bannerContainer = document.querySelector('.banner-container');
const offSetY = bannerContainer.getBoundingClientRect().height;
const bannerInner = document.querySelector('.banner-inner');
let i = 0;
let curBanner;

let timeId = setInterval(() => {
  curBanner = bannerInner.children[i];
  bannerInner.appendChild(curBanner.cloneNode(true));
  i++;
  bannerInner.style.transform = `translateY(${-offSetY * i}px)`;
}, 2000);

// const buttons = [...document.querySelectorAll('input[type=radio]')];
// let i = 0;
// let curButton = buttons[i];

// setInterval(() => {
//   curButton.removeAttribute('checked');
//   curButton = buttons[++i];
//   curButton.setAttribute('checked', '');
//   if (i >= 2) i = -1;
// }, 2000);

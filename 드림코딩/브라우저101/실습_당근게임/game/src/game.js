export default class Game {
  constructor() {
    this.gameBtn = document.querySelector('.game__button');
    this.timerIndicator = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');
    this.gameBtn.addEventListener('click', () => {
      this.onBtnClick && this.onBtnClick();
    });
  }

  setClickListener(onBtnClick) {
    this.onBtnClick = onBtnClick;
  }
}

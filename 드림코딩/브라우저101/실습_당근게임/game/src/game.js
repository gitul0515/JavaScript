/* eslint-disable class-methods-use-this */
const CARROT_COUNT = 20;
const GAME_DURATION_SEC = 20;
let timer;

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

  initScore() {
    this.gameScore.innerText = CARROT_COUNT;
  }

  showStopButton() {
    const icon = this.gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameBtn.style.visibility = 'visible';
  }

  hideButton() {
    this.gameBtn.style.visibility = 'hidden';
  }

  updateScoreBoard(score) {
    this.gameScore.innerText = CARROT_COUNT - score;
  }

  showTimerAndScore() {
    this.timerIndicator.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
  }

  stopTimer() {
    clearInterval(timer);
  }

  startTimer = score => {
    let remainingTimeSec = GAME_DURATION_SEC;
    this.updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        clearInterval(timer);
        this.finishGame(score === CARROT_COUNT);
        return;
      }
      this.updateTimerText(--remainingTimeSec);
    }, 1000);
  }

  setFinishGame(finishGame) {
    this.finishGame = finishGame;
  }

  updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.timerIndicator.innerHTML = `${minutes}:${seconds}`;
  }
}

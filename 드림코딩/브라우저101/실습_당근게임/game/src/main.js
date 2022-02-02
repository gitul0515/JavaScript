/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable strict */
import Popup from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';
import Game from './game.js';

const CARROT_COUNT = 20;
const BUG_COUNT = 20;
let started = false;
let score = 0;

const gameResultBanner = new Popup();
gameResultBanner.setClickListener(startGame);
const gameField = new Field(CARROT_COUNT, BUG_COUNT);
gameField.setListener(onItemClick);
const gameControl = new Game();
gameControl.setClickListener(onBtnClick);
gameControl.setFinishGame(finishGame);

function onBtnClick() {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
}

function startGame() {
  started = true;
  initGame();
  gameControl.showStopButton();
  gameControl.showTimerAndScore();
  gameControl.startTimer(score);
  sound.playBackground();
}

function stopGame() {
  started = false;
  gameControl.stopTimer();
  gameControl.hideButton();
  gameResultBanner.showWithText('REPLAY❓');
  sound.playAlert();
  sound.stopBackground();
}

function finishGame(win) {
  started = false;
  gameControl.hideButton();
  if (win) {
    sound.playWin();
  } else {
    sound.playBug();
  }
  gameControl.stopTimer();
  sound.stopBackground();
  gameResultBanner.showWithText(win ? 'YOU WON 🎉' : 'YOU LOST 💩');
}

function initGame() {
  score = 0;
  gameControl.initScore();
  gameField.init();
}

function onItemClick(item) {
  if (!started) {
    return;
  }
  if (item === 'carrot') {
    score++;
    gameControl.updateScoreBoard(score);
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (item === 'bug') {
    finishGame(false);
  }
}

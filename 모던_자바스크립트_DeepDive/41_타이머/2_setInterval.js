let count = 0;

// 1초마다 콜백 함수를 반복 실행한다
const timerId = setInterval(() => {
  count++;
  console.log(count); // 1 2 3 4 5

  // 5 이상이면 타이머 함수를 종료한다
  if (count >= 5) {
    clearInterval(timerId);
  }
}, 1000);

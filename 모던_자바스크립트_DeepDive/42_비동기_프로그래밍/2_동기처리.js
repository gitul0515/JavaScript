/* 동기 처리
  : 현재 실행 중인 태스크가 종료할 때까지
    다음에 실행될 태스크가 대기하는 방식이다.
*/

// 일정 시간(delay)이 경과한 이후에 콜백 함수(func)를 호출한다.
function sleep(func, delay) {
  const delayUntil = Date.now() + delay;

  while (Date.now() < delayUntil);
  func();
}

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

// sleep 함수는 3초 이상 실행된다.
sleep(foo, 3 * 1000);

// bar 함수는 3초 이상 블로킹된다.
bar();

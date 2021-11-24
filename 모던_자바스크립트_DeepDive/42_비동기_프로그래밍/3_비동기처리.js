/* 비동기 처리
  : 현재 실행 중인 태스크가 종료되지 않은 상태라 해도
    다음 태스크를 곧바로 실행하는 방식이다.
*/

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

// 타이머 함수 setTimeout은 bar 함수를 블로킹하지 않는다.
setTimeout(foo, 3 * 1000);
bar();

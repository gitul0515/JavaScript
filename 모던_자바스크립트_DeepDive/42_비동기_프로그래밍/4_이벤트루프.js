function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

// foo()는 태스크 큐에 들어있다가,
// 콜 스택이 비워지면 콜 스택에 푸시된다.
setTimeout(foo, 0);
bar(); // bar()가 먼저 실행된다.

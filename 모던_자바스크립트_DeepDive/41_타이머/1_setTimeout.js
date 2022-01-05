// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log('Hi!'), 1000);

// 2초(2000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백 함수에 '민호'와 21이 인수로 전달된다.
setTimeout((name, age) => console.log(name, age), 2000, '민호', 21);

// 두 번째 인수를 생략하면 기본값 0이 지정된다.
setTimeout(() => console.log('Hello'));

// 타이머가 취소되면 콜백 함수가 실행되지 않는다.
const timerId = setTimeout(() => console.log('Bonjour'), 3000);
clearTimeout(timerId);

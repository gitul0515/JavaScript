// 비동기 처리의 문제점
console.log('안녕하세요'); // 1
setTimeout(() => {
  console.log('gonggong2입니다.'); // 3
}, 3000);
console.log('소프트웨어 엔지니어입니다.'); // 2

// 이는 콜백 함수로 해결할 수 있다.

function foo1(callback) {
  console.log('안녕하세요'); // 1
  setTimeout(() => {
    console.log('gonggong2입니다.'); // 2
    callback(); // 3
  }, 3000);
}

function foo2() {
  console.log('소프트웨어 엔지니어입니다.');
}

foo1(foo2);

// 그러나 콜백 함수는 단점이 존재함. 콜백 지옥

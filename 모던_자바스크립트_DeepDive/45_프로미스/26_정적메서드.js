// 프로미스의 정적 메서드
// Promise.resolve와 Promise.reject는 이미 존재하는 값을 래핑하여
// 프로미스를 생성한다. 

// const promise = Promise.resolve(100);
// promise.then(console.log); // 100

// 이는 다음과 같다. 

const promise = new Promise((resolve) => resolve(100));
promise.then(console.log); // 100
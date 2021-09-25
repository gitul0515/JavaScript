// bind 메서드는 내부의 콜백 함수의 this가
// 불일치하는 문제를 해결하기 위해 사용된다.
const person = {
  name: 'Lee',
  foo(callback) {
    // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}.`);
});

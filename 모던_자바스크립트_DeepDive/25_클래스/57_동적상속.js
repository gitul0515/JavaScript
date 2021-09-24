// 동적 상속
// 클래스는 생성자 함수를 상속받을 수 있다.
const Person = function (name) {
  this.name = name;
};

class Body extends Person {}
const body = new Body('Lee');

console.log(body);
console.log(body.name); // 'Lee'
console.log(body instanceof Body); // true
console.log(body instanceof Person); // true

// 조건에 따라 동적으로 상속 대상을 결정할 수 있다.
const candidate1 = function () {}; // 생성자 함수
class candidate2 {} // 클래스

const condition = true;

class Company extends (condition ? candidate1 : candidate2) {}

const boss = new Company();
console.log(boss);
console.log(boss instanceof Company); // true
console.log(boss instanceof candidate1); // true
console.log(boss instanceof candidate2); // false

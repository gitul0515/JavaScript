// ES6 객체 디스트럭처링 할당
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// 객체의 프로퍼티 키와 다른 변수 이름으로 할당받으려면 
// 다음과 같이 선언한다.
const { firstName: f, lastName: l } = user;
console.log(f, l); // Ungmo Lee

 // 변수에 기본값을 설정할 수 있다. 
const number = { firstNumber: 1 };
const { firstNumber: a = 0, lastNumber: b = 2 } = number;
console.log(a, b); // 1 2
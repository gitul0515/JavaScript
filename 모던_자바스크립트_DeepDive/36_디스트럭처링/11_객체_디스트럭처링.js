// ES6 객체 디스트럭처링 할당
const user = { firstName: 'Ungmo', lastName: 'Lee' };

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다.
// 순서는 의미가 없다.
const { lastName, firstName } = user;
console.log(firstName, lastName); // Ungmo Lee

const { lastNumber, firstNumber } = { firstNumber: 1, lastNumber: 2 };
console.log(firstNumber, lastNumber); // 1 2

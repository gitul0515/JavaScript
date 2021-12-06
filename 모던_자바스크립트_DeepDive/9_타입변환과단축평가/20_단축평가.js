// 논리합(||)과 논리곱(&&) 연산자 표현식은
// if 문을 대체할 수 있다.

// done이 true라면 message에 '완료'를 할당한다
let done = true;
let message = done && '완료';
console.log(message); // '완료'

// done이 false라면 message에 '미완료'를 할당한다
done = false;
message = done || '미완료';
console.log(message); // '미완료'

// 객체를 가리키기를 기대하는 변수가
// null 또는 undefined가 아닌지 확인할 때
const elem = null;
const value = elem && elem.value;
// elem이 Falsy 값이면 elem으로 평가되고
// elem이 Truthy 값이면 elem.value로 평가된다.
console.log(value); // null

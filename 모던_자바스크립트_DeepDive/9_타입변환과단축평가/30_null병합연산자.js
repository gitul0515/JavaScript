// null 병합 연산자 ??는
// 변수에 기본값을 설정할 때 유용하다.

// 좌항의 피연산자가 null 또는 undefined이면
// 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.
const foo = null ?? 'default';
console.log(foo); // default

const foo2 = '홍길동' ?? 'default';
console.log(foo2); // 홍길동

const foo3 = '' ?? 'default';
console.log(foo3); // ''

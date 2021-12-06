// 옵셔널 체이닝 연산자 ?.는
// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지
// 확인하고 프로퍼티를 참조할 때 유용하다.

const elem = null;
// const elem = { value: 1 };

// elem이 null 또는 undefined이면 undefined를 반환하고,
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
const value = elem?.value;
console.log(value); // undefined

const str = '';
// const str = null;
const length = str?.length;
console.log(length); // 0

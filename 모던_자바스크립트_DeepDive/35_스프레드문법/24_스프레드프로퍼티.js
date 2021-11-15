const obj = { x: 1, y: 2 };

// 객체 병합. 프로퍼티가 중복되는 경우
// 뒤에 위치한 프로퍼티가 우선권을 갖는다.
const merged = { ...obj, ...{ y: 3, z: 4 } };
console.log(merged); // { x: 1, y: 3, z: 4 }

// 특정 프로퍼티 변경
const changed = { ...obj, ...{ y: 3 } };
console.log(changed); // { x: 1, y: 3 }

// 프로퍼티 추가
const added = { ...obj, ...{ z: 3 } };
console.log(added); // { x: 1, y: 2, z: 3 }

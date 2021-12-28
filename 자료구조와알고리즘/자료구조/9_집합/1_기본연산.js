// 집합의 기본 연산
// 삽입 : O(1)
const exampleSet = new Set();
exampleSet.add(1);
exampleSet.add(1); // 집합은 중복을 허용하지 않는다
console.log(exampleSet); // Set(1) { 1 }
exampleSet.add(2);
exampleSet.add(3);
console.log(exampleSet); // Set(3) { 1, 2, 3 }

// 삭제 : O(1)
exampleSet.delete(3);
console.log(exampleSet); // Set(2) { 1, 2 }
console.log(exampleSet.delete(2)); // true: 삭제 성공
console.log(exampleSet.delete(2)); // false: 삭제 실패

// 포함 확인 : O(1)
// 해당 항목이 집합에 포함되는지 확인한다.
console.log(exampleSet); // Set(1) { 1 }
console.log(exampleSet.has(1)); // true: 포함
console.log(exampleSet.has(2)); // false: 포함X

// splice 메서드와 조합하여
// 배열 중간에 요소들을 추가하거나 제거할 수 있다.

const arr1 = [1, 2];
const arr2 = [3, 4];

arr1.splice(1, 0, ...arr2);
console.log(arr1); // [ 1, 3, 4, 2 ]

// 보충: splice 메서드는 원본 배열을 직접 변경한다.
// 제거한 요소를 반환한다.

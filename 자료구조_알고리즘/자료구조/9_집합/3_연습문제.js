// 집합 연습 문제
// 1. 집합을 사용해 배열의 중복값 여부 확인하기
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 5];

function isDistinct(arr) {
  const set = new Set(arr);
  return set.size === arr.length;
}

console.log(isDistinct(arr1)); // true
console.log(isDistinct(arr2)); // false

// 2. 개별적인 배열들로부터 유일한 값만을 반환하기
const arr3 = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7];

// 배열 하나: O(n)
function distinctElem(arr) {
  const set = new Set(arr);
  const array = [];
  for (const elem of set) {
    array.push(elem);
  }
  return array;
}
console.log(distinctElem(arr3)); // [1, 2, 3, 4, 5, 6, 7]

// 배열 두 개: O(n + m)
function uniqueList(arr1, arr2) {
  const set = new Set(arr1.concat(arr2));
  return Array.from(set);
}
console.log(uniqueList([1, 1, 2, 2], [2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueList([1, 2], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueList([], [2, 2, 3, 4, 5])); // [2, 3, 4, 5]

// 집합 연습 문제
// 1. 집합을 사용해 배열의 중복값 여부 확인하기
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 5];

function isDistinct(arr) {
  const set = new Set(arr); // 배열을 집합으로 변환한다. O(n)
  return set.size === arr.length; // 집합의 길이와 배열의 길이를 비교한다.
}

console.log(isDistinct(arr1)); // true
console.log(isDistinct(arr2)); // false

// 2. 개별적인 배열들로부터 유일한 값만을 반환하기
const arr3 = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7];

function distinctElem(arr) {
  const set = new Set(arr); // 배열을 집합으로 변환한다(중복값 제거)
  const array = [];
  for (const elem of set) { // 집합을 다시 배열로 변환한다
    array.push(elem);
  }
  return array;
}

console.log(distinctElem(arr3)); // [1, 2, 3, 4, 5, 6, 7]

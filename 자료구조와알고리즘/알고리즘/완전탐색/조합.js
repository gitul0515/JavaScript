// 조합(combination) 알고리즘
// n개의 요소 중에서 r개를 뽑는다 (순서 상관x, 중복 x)
const arr = [1, 2, 3];

// 조합의 개수
function getCombinationNum(n, r) {
  if (n === r || r === 0) return 1;
  return getCombinationNum(n - 1, r - 1) + getCombinationNum(n - 1, r);
}

console.log(getCombinationNum(5, 3)); // 10
console.log(getCombinationNum(3, 2)); // 3
console.log(getCombinationNum(3, 1)); // 3

// 배열 arr의 요소 중에서 r개를 뽑는다
function getCombinationElem(arr = [], r) {
  const result = [];
  // 1개를 뽑는 경우, 배열의 모든 요소를 반환한다
  if (r === 1) return arr.map(elem => [elem]);

  // 배열의 요소를 차례대로 선택(fixed)한다
  arr.forEach((fixed, index, array) => {
    // 선택한 요소를 제외한 나머지 배열
    const rest = array.slice(index + 1);

    // 나머지에 대하여 조합을 재귀적으로 계산한다
    const combination = getCombinationElem(rest, r - 1);

    // 계산된 결과를 result 배열에 삽입한다
    combination.forEach(elem => result.push([fixed, ...elem]));
  });
  return result;
}

console.log(getCombinationElem([0, 1, 2, 3], 3));
// [ [ 0, 1, 2 ], [ 0, 1, 3 ], [ 0, 2, 3 ], [ 1, 2, 3 ] ]
console.log(getCombinationElem([0, 1, 2, 3], 2));
console.log(getCombinationElem([0, 1, 2, 3], 1));

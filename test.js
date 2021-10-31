// 이진 탐색 알고리즘 (재귀)
const arr = [1, 2, 3, 4, 5, 6, 7];
const lastIndex = arr.length - 1;

// 배열(array)과 첫 인덱스(left), 마지막 인덱스(right),
// 탐색 요소(element)를 입력받는다.
const binarySearch = function (array, left, right, element) {
  // 중간 인덱스를 계산한다.
  const mid = parseInt((left + right) / 2, 10);

  /* 탐색 요소와 중간값을 비교하여 재귀호출.
      탐색 요소가 중간값보다 작으면 왼편을, 크면 오른편을 탐색한다. */
  if (left <= right) { // 배열의 요소가 1개 이상일 때
    if (element < array[mid]) {
      return binarySearch(array, left, mid - 1, element);
    }
    if (element > array[mid]) {
      return binarySearch(array, mid + 1, right, element);
    }
    return mid; // 탐색 요소와 중간값이 같으면 중간값을 반환
  }
  // 탐색 요소가 없으면 undefined를 반환한다.
  return undefined;
};
console.log(binarySearch(arr, 0, lastIndex, 2)); // 1
console.log(binarySearch(arr, 0, lastIndex, 5)); // 4
console.log(binarySearch(arr, 0, lastIndex, 4)); // 3
console.log(binarySearch(arr, 0, lastIndex, 0)); // undefined
console.log(binarySearch(arr, 0, lastIndex, 8)); // undefined

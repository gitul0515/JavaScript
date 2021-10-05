// Median of Medians 알고리즘
// 배열 생성 및 초기화
const array = [];
for (let i = 0; i < 32; i++) {
  array[i] = Math.floor(Math.random() * 100); // 난수 범위: 0~99
}
console.log(array);

// 배열의 두 요소 값을 교환하는 함수
function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

// 선택 정렬 함수
const selectionSort = function (array, l, r) {
  let i; let j; let min;
  for (i = l; i < r; i++) {
    min = i;
    for (j = i + 1; j <= r; j++) { // 최소값 탐색
      if (array[min] > array[j]) min = j;
    }
    if (array[i] !== array[min]) { // 최소값이 변경된 경우에만 교환한다.
      swap(array, i, min);
    }
  }
};

// 배열 array[l...r]의 중앙값을 찾아 피벗으로 반환한다.
function mideanOfMedians(array, l, r) {
  const num = r - l + 1; // 배열의 원소 개수

  // 배열의 원소가 5개 이하면
  // 배열을 선택 정렬한 뒤, 중앙값을 피벗으로 반환한다.
  if (num <= 5) {
    selectionSort(array, l, r);
    return array[parseInt((l + r) / 2, 10)];
  }

  // 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  const m = parseInt((num + 4) / 5, 10); // 올림 계산: 배열 사이즈에 4를 더하고 5로 나눈다.

  const median = []; // 각 하위 배열의 중앙값을 저장할 배열 선언

  for (let j = 0; j < m; j++) {
    // 마지막 하위 배열이 아닌 경우 (원소: 5개)
    if (5 * (j + 1) < num) {
      selectionSort(array, 5 * j, 5 * j + 4); // 하위 배열을 정렬한다.
      median[j] = array[5 * j + 2]; // 하위 배열의 중앙값을 median에 저장한다.
    } else { // 마지막 하위 배열인 경우 (원소: 5개 이하)
      selectionSort(array, 5 * j, r); // 하위 배열을 정렬한다.
      const endMid = parseInt((5 * j + r) / 2, 10);
      median[j] = array[endMid]; // 하위 배열의 중앙값을 median에 저장한다.
    }
  }
  // median 배열 출력 (확인용)
  console.log(median);

  // 중앙값의 중앙값을 재귀적으로 구한다.
  return mideanOfMedians(median, 0, m - 1);
}

console.log(mideanOfMedians(array, 0, array.length - 1));

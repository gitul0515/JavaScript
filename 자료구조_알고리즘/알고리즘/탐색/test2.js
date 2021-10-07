// Median of Medians 알고리즘
// 배열 생성 및 초기화
const array = [];
for (let i = 0; i < 13; i++) { // 13개의 난수를 생성하여 배열에 저장
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

// 퀵 정렬 파티션 함수
function partition(array, left, right) {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      swap(array, ++i, j);
    }
  }

  swap(array, i + 1, right);
  return i + 1; // 피벗의 위치를 반환한다.
}

// 배열 A[l...r]에서 i번째 작은 원소를 찾는다.
function linearSelect(array, l, r, i) {
  // 배열의 원소가 하나뿐이면 i는 반드시 1이다.
  if (l === r) return array[l];

  // 배열의 원소가 5개 이하면
  // 배열을 선택 정렬한 뒤, 원하는 원소를 반환하고 끝낸다.
  const num = array.length;
  if (num <= 5) {
    selectionSort(array, l, r);
    return array[i - 1];
  }

  // 전체 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  const m = parseInt((num + 4) / 5, 10); // 올림 계산: 배열 사이즈에 4를 더하고 5로 나눈다.

  const median = []; // 각 하위 배열의 중앙값을 저장할 배열 선언

  for (let j = 0; j < m; j++) {
    // 마지막 하위 배열이 아닌 경우
    if (5 * (j + 1) < num) {
      selectionSort(array, 5 * j, 5 * j + 4); // 하위 배열을 정렬한다.
      median[j] = array[5 * j + 2]; // 하위 배열의 중앙값을 median에 저장한다.
    } else { // 마지막 하위 배열인 경우
      selectionSort(array, 5 * j, num - 1); // 하위 배열을 정렬한다.
      const endMid = parseInt((5 * j + (num - 1)) / 2, 10);
      median[j] = array[endMid]; // 하위 배열의 중앙값을 median에 저장한다.
    }
  }
  // 중앙값의 중앙값을 linearSelect를 재귀 호출해서 찾아낸다.
  const medianOfMedians = linearSelect(median, 0, m - 1, parseInt(m / 2, 10) + 1);

  // 중앙값의 중앙값을 pivot으로 설정한다.
  const pivot = medianOfMedians;

  // pivot을 배열의 마지막 인덱스로 보낸다.
  for (let j = 0; j < array.length; j++) {
    if (array[j] === pivot) {
      swap(array, j, array.length - 1);
    }
  }

  // 파티션 함수를 호출하여 pivot으로 전체 원소를 분할한다.
  const q = partition(array, l, r);
  const k = q - l + 1;

  if (i < k) return linearSelect(array, l, q - 1, i);
  if (i > k) return linearSelect(array, q + 1, r, i - k);
  if (i === k) return array[q];
}

console.log(linearSelect(array, 0, array.length - 1, 3));

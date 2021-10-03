// // Median of Medians 알고리즘
// // 배열 생성 및 초기화
// const array = [];
// for (let i = 0; i < 20; i++) { // 20개의 난수를 생성하여 배열에 저장
//   array[i] = Math.floor(Math.random() * 100); // 난수 범위: 0~99
// }

// 퀵 선택 알고리즘의 활용
const array = [21, 10, 34, 41, 30, 12, 19, 7, 43, 28, 56, 50, 91, 83, 81, 75]; // 샘플 데이터
const num = 45; // 기준점
const i = 4;

// num에서 i번째로 값이 근접한 숫자를 탐색하는 함수
function proximityNumber(array, num, i) {
  // 기준점 45를 배열의 마지막 위치에 삽입한다. (삽입하지 않고, 피벗만으로 지정하는 방법도 있을 듯)
  array[array.length] = num;

  // 퀵 정렬 파티션 함수를 호출한다.
  // 기준점 45를 피벗으로 정렬이 1번 수행된다.
  const p = partition(array, 0, array.length - 1); // 10

  // 45는 배열의 q번째에 위치한다.
  const q = p + 1; // 11

  // i가 q보다 작으면 왼쪽 그룹으로 범위를 좁힌다.
  // quickSlection 함수를 통해 q - i번째로 작은 숫자를 탐색한다.
  if (i < q) return quickSlection(array, 0, p - 1, q - i);
  // i가 q 이상이면 오른쪽 그룹으로 범위를 좁힌다.
  // quickSlection 함수를 통해 i번째로 작은 숫자를 탐색한다.
  if (i >= q) return quickSlection(array, p + 1, array.length - 1, i);
}

// 배열의 두 요소 값을 교환하는 함수
function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

// 퀵 정렬 파티션 함수
function partition(array, left, right) {
  // 이 함수가 처음 호출될 때에는 pivot = num or pivot = array[right]
  // 처음 호출된 것이 아닐 때에는 pivot = median of medians()
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

// 퀵 정렬 기본 함수
const quickSort = function (array, left, right) {
  let p;
  if (left < right) { // 배열의 요소가 2개 이상이면 다음을 수행한다.
    p = partition(array, left, right); // 파티션 함수를 호출한 후, 피벗의 위치를 반환받는다.
    // 피벗을 기준으로 분할하여 재귀적으로 호출한다.
    quickSort(array, left, p - 1);
    quickSort(array, p + 1, right);
  }
};

// 퀵 선택 함수
// 배열 array[l...r]에서 i번째로 작은 원소를 찾는다.
function quickSlection(array, l, r, i) {
  const num = array.length; // 배열의 원소 개수

  // 배열의 원소가 5개 이하면
  // 배열을 선택 정렬한 뒤, i번째 원소를 찾고 끝낸다.
  if (num <= 5) {
    selectionSort(array, num)
    return array[i - 1];
  }

  // 전체 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  const m =  parseInt((num + 4) / 5, 10); // 올림 계산: 배열 사이즈에 4를 더하고 5로 나눈다.
  const median = []; // 각 하위 배열의 중간값을 저장할 배열 선언

  for (let j = 0; j < m; j++) {
    // 마지막 하위 배열이 아닌 경우
    if (5 * (j + 1) < num) {
    // 하위 배열의 절반까지만 정렬한다.
    for (let k = 0; k < 3; k++) {
      let min = array[5 * j];
      for (let )
      
    }



      median[j] = array[j + 2]; // 하위 배열의 중간값을 median 배열에 저장
    } else { // 마지막 하위 배열인 경우
      quickSort(array, j, num - 1);
      median[k] = array[(j + num - 1)/2];
    }
  }

  if (left === right) return array[left];
  const q = partition(array, left, right);
  const k = q - left + 1;

  if (i < k) return quickSlection(array, left, q - 1, i);
  if (i > k) return quickSlection(array, q + 1, right, i - k);
  if (i === k) return array[q];
}

// 선택 정렬 함수
const selectionSort = function (array, num) {
  let i; let j; let max;
  for (i = num - 1; i > 0; i--) {
    max = i;
    for (j = i - 1; j >= 0; j--) { // 최대값 탐색
      if (array[j] > array[max]) max = j;
    }
    if (array[i] !== array[max]) { // 최대값이 변경된 경우에만 교환한다.
      swap(array, i, max);
    }
  }
};

console.log(proximityNumber(array, num, i));

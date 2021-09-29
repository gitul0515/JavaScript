// 배열 생성 및 초기화
const array = [];
for (let i = 0; i < 10; i++) { // 10개의 난수를 생성하여 배열에 저장
  array[i] = Math.floor(Math.random() * 100); // 난수 범위: 0~99
}

console.log(`초기값: ${array.join(', ')}`);

// 배열의 두 요소 값을 교환하는 함수
const swap = function (array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

// 정렬의 횟수를 기록하는 변수
let sortCount = 0;

// 퀵 정렬 파티션 함수
const partition = function (array, left, right) {
  // i가 가리키는 위치에는 피벗보다 작은 값이,
  // j가 가리키는 위치에는 피벗보다 큰 값이 오도록 정렬한다.

  const pivot = array[right]; // 마지막에 위치한 요소를 피벗으로 할당한다.
  let i = left - 1; // i는 (첫 번째 인덱스 - 1)에서 시작한다.

  /* j는 첫 번째 인덱스에서 시작한다.
     j가 마지막 인덱스에 도달할때까지 다음을 반복한다. */
  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      swap(array, ++i, j); // ++i의 요소와 j의 요소를 교환한다.
    }
  }

  // 첫 인덱스부터 i까지는 피벗보다 작은 값이 저장되었다.
  // i + 1의 요소와 피벗의 값을 교환한다.
  swap(array, i + 1, right);

  // 피벗과 정렬 결과를 출력한다.
  console.log();
  console.log(`level: ${++sortCount}`);
  console.log('=================================================');
  console.log(`피벗: ${pivot}`);
  console.log(`정렬 결과: ${array.join(', ')}`);

  return i + 1; // 피벗의 위치를 반환한다.
};

// 퀵 정렬 기본 함수
const quick_sort = function (array, left, right) {
  let p;
  if (left < right) { // 배열의 요소가 2개 이상이면 다음을 수행한다.
    p = partition(array, left, right); // 파티션 함수를 호출한 후, 피벗의 위치를 반환받는다.
    // 피벗을 기준으로 분할하여 재귀적으로 호출한다.
    quick_sort(array, left, p - 1);
    quick_sort(array, p + 1, right);
  }
};

// 퀵 정렬 호출
quick_sort(array, 0, array.length - 1);

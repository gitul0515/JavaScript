// 배열의 중앙값을 반환하는 함수 (선택 정렬 응용)
// 배열 생성
const array = [];
for (let i = 0; i < 10; i++) { // 10개의 난수 생성
  array[i] = Math.floor(Math.random() * 100 + 1); // 난수 범위: 1~100
}
console.log('array:', array);

// 배열의 두 요소 값을 교환하는 함수
const swap = function (array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

// 배열 array[l...r]의 중앙값을 반환하는 함수
const arrayMid = function (array, l, r) {
  const mid = Math.floor((r-l) / 2); // 중앙값이 위치할 인덱스
  let i; let j; let min;

  // 선택 정렬
  for (i = l; i <= l + mid; i++) { // l + mid 까지만 정렬한다.
    min = i;
    for (j = i + 1; j <= r; j++) { // 최소값을 탐색한다.
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) swap(array, i, min); // 최소값을 i의 자리에 삽입한다.
  }
  return array[l + mid]; // 중앙값을 반환한다.
};

// 배열(array[4...8])의 중앙값 출력
const midValue = arrayMid(array, 4, 8);
console.log('array[4...8]의 중앙값:', midValue);

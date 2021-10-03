// 배열 생성
const array = [];
for (let i = 0; i < 20; i++) { // 난수를 생성하여 배열에 저장
  array[i] = Math.floor(Math.random() * 100); // 난수 범위: 0~99
}

// 배열의 두 요소 값을 교환하는 함수
const swap = function (array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

// 선택 정렬 함수 (중간 원소까지만 정렬)
const selectionSort = function (array, l, r) {
  const mid = r / 2;
  let i; let j; let min;
  for (i = 0; i < mid; i++) {
    min = i;
    for (j = i + 1; j <= mid; j++) { // 최소값 탐색
      if (array[min] > array[j]) min = j;
    }
    if (array[i] !== array[min]) { // 최소값이 변경된 경우에만 교환한다.
      swap(array, i, min);
    }
  }
};
// 선택 정렬 호출
selectionSort(array, 0, array.length - 1);

// 정렬 결과 출력
console.log(`정렬 결과: ${array.join(', ')}`);

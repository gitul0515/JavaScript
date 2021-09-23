// 배열 생성 및 초기화
const array = [];
for (let i = 0; i < 100; i++) { // 난수를 생성하여 배열에 저장
  array[i] = Math.floor(Math.random() * 100); // 난수 범위: 0~99
}

// 배열의 두 요소 값을 교환하는 함수
const swap = function (array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

// 퀵 정렬 파티션 함수
const partition = function (array = [], left, right) {
  /*
    low는 left+1부터, high는 right부터 시작한다.
    (단, do-while문을 고려해 변수를 초기화한다)
  */
  let low = left;
  let high = right + 1;
  const pivot = left; // pivot은 첫 인덱스이다.

  do {
    do { // 배열의 왼쪽에는 pivot보다 작은값이 위치하게 한다.
      low++;
    } while (array[low] < array[pivot]);
    do { // 배열의 오른쪽에는 pivot 보다 큰값이 위치하게 한다.
      high--;
    } while (array[high] > array[pivot]);
    if (low < high) swap(array, low, high); // low에 저장된 값과 high에 저장된 값을 교환한다.
  } while (low < high); // 배열의 범위를 벗어났는지 확인한다.
  swap(array, pivot, high); // 피벗의 값과 high에 저장된 값을 교환한다.
  return high; // pivot의 인덱스를 반환한다.
};

// 퀵 정렬 기본 함수
const quick_sort = function (array = [], left, right) {
  let p;
  if (left < right) { // 배열의 요소가 2개 이상이면 다음을 수행한다.
    p = partition(array, left, right); // partition 함수를 호출한 뒤, pivot 인덱스를 저장한다.
    // pivot을 기준으로 배열을 분할하여 재귀 호출한다.
    quick_sort(array, left, p - 1);
    quick_sort(array, p + 1, right);
  }
};

// 퀵 정렬 호출
quick_sort(array, array.length);

// 정렬 결과 출력
console.log(`정렬 결과: ${array.join(', ')}`);

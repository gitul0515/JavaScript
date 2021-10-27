// Median of Medians 알고리즘 (정렬 메서드 사용)
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

// 배열 array[l...r]의 중앙값을 찾아 피벗으로 반환한다.
function mideanOfMedians(array, l, r) {
  const num = r - l + 1; // 배열의 원소 개수

  // 배열의 원소가 5개 이하면
  // 배열을 정렬한 뒤, 중앙값을 피벗으로 반환한다.
  if (num <= 5) {
    array.sort((a, b) => a - b); // 오름차순 정렬
    return array[Math.floor(r / 2)];
  }

  // 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  const m = Math.ceil(num / 5);

  const median = []; // 각 하위 배열의 중앙값을 저장할 배열 선언

  for (let i = 0; i < m; i++) {
    // 마지막 하위 배열이 아닌 경우 (원소 5개)
    if (5 * (i + 1) < num) {
      let subArray = array.slice(5*i, 5*(i + 1)); // 하위 배열을 임시적으로 만든 후 정렬한다.
      subArray.sort((a, b) => a - b);
      median[i] = subArray[2]; // 하위배열의 중앙값을 median에 저장한다.
    } else { // 마지막 하위 배열인 경우 (원소 5개 이하)
      let subArray = array.slice(5*i); // 하위 배열을 임시적으로 만든 후 정렬한다.
      subArray.sort((a, b) => a - b);
      const Mid = Math.floor((subArray.length - 1) / 2);  // 하위배열의 중앙값을 구해 median에 저장한다.
      median[i] = subArray[Mid];
    }
  }
  // median 배열 출력 (확인용)
  console.log(median);

  // 중앙값의 중앙값을 재귀적으로 구한다.
  return mideanOfMedians(median, 0, m - 1);
}

// 퀵 선택 함수 
// array[left...right]에서 i번째로 작은 원소를 반환한다
function quickSlection(array, left, right, i) {
  // 원소가 1개라면 i는 반드시 1이다. 첫 번째 원소를 반환한다.
  if (left === right) return array[left];

  // 피벗을 기준으로 배열의 원소를 분할한다.
  const q = partition(array, left, right);

  // 피벗은 배열에서 k번째 작은 원소다.
  const k = q - left + 1;

  // k번째보다 작은 원소를 찾으면 왼쪽으로 범위를 좁힌다.
  if (i < k) return quickSlection(array, left, q - 1, i);
  else if (i === k) return array[q]; // i와 k가 같다면 피벗이 바로 찾는 원소다.
  else return quickSlection(array, q + 1, right, i - k); // 오른쪽으로 범위를 좁힌다.
}

console.log(mideanOfMedians(array, 0, array.length - 1));

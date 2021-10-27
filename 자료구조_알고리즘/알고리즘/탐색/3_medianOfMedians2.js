// 보완된 선택 알고리즘
const array = [21, 10, 34, 41, 30, 12, 19, 7, 43, 28, 56, 50, 91, 83, 81, 75]; // 샘플 데이터
const num = 45; // 기준점
const i = 10; // 근접 거리

// 파티션 함수의 호출 횟수를 기록한다.
let partitionCount = 0;

console.log(proximityNumber(array, num, i));

// 기준점 num에서 i번째 근접한 원소를 탐색한다
function proximityNumber(array, num, i) {
  // 기준점 45를 배열의 마지막 위치에 삽입한다.
  array[array.length] = num;

  // 퀵 정렬 파티션 함수를 호출한다.
  // 기준점 45를 피벗으로 정렬이 1번 수행된다.
  const q = partition(array, 0, array.length - 1); // 10
  print_array(array, array[q]); // 파티션 정렬 결과를 출력

  // 45는 배열의 k번째에 위치한다.
  const k = q + 1; // 11

  // i가 k보다 작으면 왼쪽 그룹으로 범위를 좁힌다.
  // linearSelect 함수를 통해 k - i번째로 작은 숫자를 탐색한다.
  if (i < k) return linearSelect2(array, 0, q - 1, k - i);
  // i가 q 이상이면 오른쪽 그룹으로 범위를 좁힌다.
  // linearSelect 함수를 통해 i번째로 작은 숫자를 탐색한다.
  if (i >= k) return linearSelect2(array, q + 1, array.length - 1, i);
}

// 보완된 선택 알고리즘
// 배열 array[l...r]에서 i번째 작은 원소를 찾는다. (피벗을 중앙값에 가깝게 설정한다)
function linearSelect2(array, l, r, i) {
  // 배열의 원소가 하나뿐이면 i는 반드시 1이다.
  // 첫 번째 원소를 반환한다.
  if (l === r) return array[l];

  // 배열의 원소가 5개 이하면
  // linearSelect1을 호출하여 원하는 원소를 찾는다.
  const num = r - l + 1;
  if (num <= 5) {
    return linearSelect1(array, l, r, i);
  }

  // 전체 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  const m = parseInt((num + 4) / 5, 10); // 올림 계산: 배열 사이즈에 4를 더하고 5로 나눈다.

  const median = []; // 각 하위 배열의 중앙값을 저장할 배열 선언

  for (let j = 0; j < m; j++) {
    // 마지막 하위 배열이 아닌 경우 (원소: 5개)
    if (5 * (j + 1) < num) {
      median[j] = linearSelect1(array, 5 * j, 5 * j + 4, 3); // 하위 배열의 중앙값을 median에 저장한다.
    } else { // 마지막 하위 배열인 경우 (원소: 5개 이하)
      const arrayLen = r - 5 * j + 1; // 원소의 개수를 구한다
      // 하위 배열의 중앙값을 median에 저장한다.
      median[j] = linearSelect1(array, 5 * j, r, Math.ceil(arrayLen / 2));
    }
  }
  // 중앙값의 중앙값을 linearSelect2를 재귀 호출해서 찾아낸다.
  // 중앙값이 두 개면 작은 수를 찾는다.
  const medianOfMedians = linearSelect2(median, 0, m - 1, Math.ceil(m / 2)); // 올림 함수

  // 중앙값의 중앙값을 pivot으로 설정한다.
  const pivot = medianOfMedians;

  // pivot을 배열의 마지막 인덱스로 보낸다.
  for (let j = 0; j < num; j++) {
    if (array[j] === pivot) {
      swap(array, j, num - 1);
    }
  }

  // 파티션 함수를 호출하여 pivot으로 전체 원소를 분할한다.
  const q = partition(array, l, r);
  print_array(array, array[q]); // 파티션 정렬의 결과를 출력한다

  const k = q - l + 1; // pivot은 배열에서 k번째 작은 원소다.

  // pivot의 순서보다 작은 원소를 찾으면
  // 왼쪽 그룹으로 범위를 좁힌다.
  if (i < k) return linearSelect2(array, l, q - 1, i);
  else if (i === k) return array[q]; // pivot의 순서와 일치한다면, pivot이 찾는 원소다.
  else return linearSelect2(array, q + 1, r, i - k); // 오른쪽 그룹으로 범위를 좁힌다.
}

// 기본적인 선택 알고리즘
// array[left...right]에서 i번째로 작은 원소를 반환한다
function linearSelect1(array, left, right, i) {
  // 원소가 1개라면 i는 반드시 1이다. 첫 번째 원소를 반환한다.
  if (left === right) return array[left];

  // 피벗을 기준으로 배열의 원소를 분할한다.
  const q = partition(array, left, right);

  // 피벗은 배열에서 k번째 작은 원소다.
  const k = q - left + 1;

  // k번째보다 작은 원소를 찾으면 왼쪽으로 범위를 좁힌다.
  if (i < k) return linearSelect1(array, left, q - 1, i);
  else if (i === k) return array[q]; // i와 k가 같다면 피벗이 바로 찾는 원소다.
  else return linearSelect1(array, q + 1, right, i - k); // 오른쪽으로 범위를 좁힌다.
}

// 배열의 두 요소 값을 교환하는 함수
function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

// 파티션 함수
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

// 배열의 정렬 결과를 출력하는 함수
function print_array(array, pivot) {
  console.log(`level: ${++partitionCount}`);
  console.log('=================================================');
  console.log(`피벗: ${pivot}`);
  console.log(`정렬 결과: ${array.join(', ')}`);
  console.log();
}
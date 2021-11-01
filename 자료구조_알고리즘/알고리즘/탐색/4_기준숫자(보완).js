// 기준 숫자에서 10번째로 근접한 원소 찾기
const data = [21, 10, 34, 41, 30, 12, 19, 7, 43, 28, 56, 50, 91, 83, 81, 75]; // 샘플 데이터
const target = 45; // 기준 숫자
let level = 0; // 피벗을 통한 정렬의 횟수를 기록한다

 // 기준점 45와의 차이를 계산하여 distance 배열에 저장
const distance = [];
for (let i = 0; i < data.length; i++) {
  distance[i] = data[i] - 45; // 절대값을 저장한다
}
console.log(distance);

// linearSelect를 호출하여 10번째로 작은 값을 찾는다
const answer = linearSelect2(distance, 0, distance.length - 1, 14); // 30

console.log(distance);

console.log('결과:', answer + 45);

// 기본적인 선택 알고리즘
// 배열 array[l...r]에서 i번째로 작은 수를 찾는다
function linearSelect(array, l, r, i) {
  // 배열의 원소가 1개뿐이라면, 그 원소를 반환한다.
  if (l === r) return array[l];

  // 마지막 원소를 피벗으로 하여, 파티션 정렬을 수행한다.
  const q = partition(array, l, r);

  // 피벗은 배열에서 k번째로 작은 원소다.
  const k = q - l + 1;

  // 피벗보다 작은 원소를 찾으면 왼쪽으로 범위를 좁힌다.
  if (i < k) return linearSelect(array, l, q - 1, i);
  else if (i === k) return array[q]; // i와 k가 일치한다면, 피벗이 바로 찾는 원소다.
  else return linearSelect(array, q + 1, r, i - k); // 오른쪽으로 범위를 좁힌다.
}

// 보완적인 선택 알고리즘
// 배열 array[l...r]에서 i번째로 작은 수를 찾는다
// 피벗을 중앙값에 근접한 숫자로 할당한다
function linearSelect2(array, l, r, i) {
  // 배열의 원소가 1개뿐이면, 그 원소를 반환한다.
  if (l === r) return array[l];
  
  // 배열의 원소가 5개 이하면, 원하는 원소를 찾고 끝낸다.
  const arrayNum = r - l + 1;
  if (arrayNum <= 5) {
    return linearSelect(array, l, r, i); // 기본적인 선택 알고리즘 호출
  }

  // 배열을 5개씩의 원소를 가진 m개의 하위 배열로 나눈다.
  const m = Math.ceil(arrayNum / 5); // 올림 계산

  // 각 하위 배열의 중앙값을 저장할 배열 median
  const median = [];

  for (let j = 0; j < m; j++) {
    // 마지막 하위 배열이 아닌 경우 (원소 5개)
    if (j < m - 1) {
      median[j] = linearSelect(array, 5 * j, 5 * j + 4, 3); // 기본적인 선택 알고리즘 호출
    }
    else { // 마지막 하위 배열인 경우 (원소 5개 이하)
      const arrayLen = r - 5 * j + 1; // 원소의 개수를 구한다
      // 중앙값이 두 개면 작은 숫자를 찾는다
      median[j] = linearSelect(array, 5 * j, r, Math.ceil(arrayLen / 2));
    }
  }
  // 중앙값의 중앙값을 재귀 호출을 통해 찾아낸다
  const medianOfMedians = linearSelect2(median, 0, m - 1, Math.ceil(m / 2));

  // 중앙값의 중앙값을 피벗으로 할당한다
  const pivot = medianOfMedians;

  // 피벗을 배열의 마지막 원소로 보낸다
  for (let j = l; j <= r; j++) {
    if (array[j] === pivot) {
      swap(array, j, r);
    }
  }

  // 파티션 함수 호출. 피벗을 기준으로 정렬이 1번 수행된다.
  const p = partition(array, l, r);
  showArray(array, array[p]); // 배열의 상태를 출력한다.

  // 피벗은 배열에서 k번째 작은 원소다.
  const k = p - l + 1;

  // 피벗보다 작은 원소를 찾으면, 왼쪽으로 범위를 좁힌다
  if (i < k) {
    return linearSelect2(array, l, p - 1, i);
  } else if (i === k) { // 피벗과 일치하다면, 피벗이 바로 찾는 원소다
    return array[p];
  } else { // 피벗보다 큰 원소를 찾으면, 오른쪽으로 범위를 좁힌다
    return linearSelect2(array, p + 1, r, i - k);
  }
}

// 파티션 함수
// 피벗보다 작은 요소는 왼쪽, 큰 요소는 오른쪽으로 정렬한다
function partition(array, l, r) {
  const pivot = Math.abs(array[r]); // 마지막 원소의 절대값을 피벗으로 할당한다
  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (Math.abs(array[j]) <= pivot) { // 절대값을 비교한다
      swap(array, ++i, j);
    }
  }
  swap(array, i + 1, r);
  return i + 1;
}

function swap(array, x, y) {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

// 배열의 상태를 출력하는 함수
function showArray(array, pivot) {
  console.log();
  console.log("level:", ++level);
  console.log("=======================================");
  console.log("pivot:", pivot);
  console.log(array.join(', '));
  console.log();  
}
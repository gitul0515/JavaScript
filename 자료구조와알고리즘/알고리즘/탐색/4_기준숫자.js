// 기준 숫자에서 10번째로 근접한 원소 찾기
const data = [21, 10, 34, 41, 30, 12, 19, 7, 43, 28, 56, 50, 91, 83, 81, 75]; // 샘플 데이터
const target = 45; // 기준 숫자

// 기준점 45와의 차이를 계산하여 distance 배열에 저장
const distance = [];
for (let i = 0; i < data.length; i++) {
  distance[i] = Math.abs(data[i] - 45); // 절대값을 저장한다
}
console.log(distance);

// linearSelect를 호출하여 10번째로 작은 값을 찾는다
const answer = linearSelect(distance, 0, distance.length - 1, 10); // 30

// distance 배열을 다시 초기화한다
// (linearSelect를 호출하면서 순서가 바뀌었기 때문)
for (let i = 0; i < data.length; i++) {
  distance[i] = Math.abs(data[i] - 45); // 절대값을 저장한다
}

// answer이 저장된 인덱스를 찾아 i에 저장한다
let i;
for (i = 0; i < distance.length; i++) {
  if (distance[i] === answer) 
    break;
}

// 정답은 data[i]다.
console.log('결과:', data[i]);

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

// 파티션 함수
// 피벗보다 작은 요소는 왼쪽, 큰 요소는 오른쪽으로 정렬한다
function partition(array, l, r) {
  const pivot = array[r]; // 마지막 원소를 피벗으로 할당한다
  let i = l - 1;

  for (let j = l; j < r; j++) {
    if (array[j] <= pivot) {
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

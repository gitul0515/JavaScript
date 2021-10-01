// 선택 정렬 알고리즘 (작성자: 2014044120 권기홍)
const array = [21, 10, 34, 41, 30, 12, 19, 7, 43, 28, 56, 50, 91, 83, 81, 75]; // 샘플 데이터
const num = 45; // 기준점
const i = 10;

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

// 퀵 선택 함수
function quickSlection(array, left, right, i) {
  if (left === right) return array[left];
  const q = partition(array, left, right);
  const k = q - left + 1;

  if (i < k) return quickSlection(array, left, q - 1, i);
  if (i > k) return quickSlection(array, q + 1, right, i);
  if (i === k) return array[q];
}

console.log(proximityNumber(array, num, i));

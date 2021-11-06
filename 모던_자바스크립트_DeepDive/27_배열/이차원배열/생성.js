// 자바스크립트에 공식적인 2차원 배열은 없다.
// const arr = [][]와 같은 선언은 불가능하다. 대신,
// 1차원 배열에 다른 배열 객체를 추가해 2차원 배열을 만든다.

// 1. 초기값을 할당하여 생성하기
// array[5][2]
let array = [['a', 'b'], ['c', 'd'], ['e', 'f'], ['g', 'h'], ['i', 'j']];

// 2. 반복문을 사용하여 빈 배열 생성
// array[5][2]
array = new Array(5);
for (let i = 0; i < array.length; i++) {
  array[i] = new Array(2).fill(0);
}
console.log(array);

// 3. 2차원 배열 생성 함수 만들기
function create2DArray(rows, columns, initial) {
  const array = new Array(rows);
  for (let i = 0; i < rows; i++) {
    array[i] = new Array(columns).fill(initial);
  }
  return array;
}
const arr = create2DArray(5, 2, 0);
console.log(arr);

function create2dArray(rows, columns, initial) {
  const array = [];
  for (let i = 0; i < rows; i++) {
    array.push([]);
    for (let j = 0; j < columns; j++) {
      array[i][j] = initial;
    }
  }
  return array;
}
console.log(create2dArray(5, 3, 1));

// 4. Array 객체에 배열 생성 함수를 추가
Array.matrix = function (rows, columns, initial) {
  let a = [];
  const mat = [];
  for (let i = 0; i < rows; i++) {
    a = [];
    for (let j = 0; j < columns; j++) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
};
const ar = Array.matrix(5, 2, 0);
console.log(ar);

// 5. from, fill 메서드 사용하기
const arr1 = Array.from(Array(5), () => new Array(2));
console.log(arr1);
const arr2 = Array.from(Array(5), () => new Array(2).fill(0));
console.log(arr2);

// 이차원 배열 함수 만들기
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

// from, fill 메소드를 사용하여 이차원 배열 만들기
const arr1 = Array.from(Array(5), () => new Array(3).fill(1));
console.log(arr1);

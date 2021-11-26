// 행렬 경로 문제
// matrix의 (0, 0)에서 (i, j)까지 이동한다.
// 오른쪽이나 아래쪽으로만 이동할 수 있다.
// 방문한 칸에 있는 수들을 더한 값이 최소가 되도록 한다.
const matrix = [
  [6, 7, 12, 5],
  [5, 3, 11, 18],
  [7, 17, 3, 3],
  [8, 10, 14, 9]
];

function wrap(_i, _j) {
  const [i, j] = [_i - 1, _j - 1];
  return (function matrixPath(i, j) {
    if (i === 0 && j === 0) return matrix[i][j];
    else if (i === 0) return matrixPath(i, j - 1) + matrix[i][j];
    else if (j === 0) return matrixPath(i - 1, j) + matrix[i][j];
    else return Math.min(matrixPath(i, j - 1), matrixPath(i - 1, j)) + matrix[i][j];
  }(i, j));
}

// console.log(matrixPath(0, 0)); // 6
// console.log(matrixPath(0, 2)); // 25
// console.log(matrixPath(2, 0)); // 18
// console.log(matrixPath(1, 2)); // 25

console.log(wrap(1, 1)); // 6
console.log(wrap(1, 3)); // 25
console.log(wrap(3, 1)); // 18
console.log(wrap(2, 3)); // 25

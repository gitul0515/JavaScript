// 2 * 3 행렬
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

// 3 * 2 행렬
const B = [
  [9, 8],
  [7, 6],
  [5, 4]
];

// 행렬 A와 행렬 B의 곱하기
function matrixMultiply(A = [], B = []) {
  // A가 p * q 행렬, B가 q * r 행렬일 때,
  // AB는 p * r 행렬이 된다.
  const p = A.length;
  const q = A[0].length;
  const r = B[0].length;

  if (q !== B.length) {
    console.log('행렬 곱셈이 불가능한 조합입니다.');
    return;
  }

  // p * r 크기의 행렬 생성
  const result = Array.from({ length: p }, () => Array.from({ length: r }, () => 0));

  // 행렬 곱셈
  for (let i = 0; i < p; i++) {
    for (let j = 0; j < r; j++) {
      let sum = 0;
      for (let k = 0; k < q; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}
console.log(matrixMultiply(A, B));

// --------------------------------------------------
// 행렬의 크기 데이터 (행 * 열)
const matrixSize = [
  [10, 100],
  [100, 5],
  [5, 50]
];

// 행렬곱 A_i...A_j를 계산하는 최소 비용
function rMatrixChain(i, j, p) {
  if (i === j) return 0;
  else {
    let min = Infinity;
    for (let k = i; k < j; k++) {
      const temp = rMatrixChain(i, k, p) + rMatrixChain(k + 1, j, p) + p[i][0] * p[k][1] * p[j][1];
      if (temp < min) {
        min = temp;
      }
    }
    return min;
  }
}
console.log(rMatrixChain(0, 2, matrixSize));

// 동적 프로그래밍 (Bottom-up)
function matrixChain(n, p) { // n은 행렬의 개수
  const M = Array.from({ length: n }, () => Array.from({ length: n }));

  for (let i = 0; i < n; i++) {
    M[i][i] = 0;
  }

  // 대각선의 순서로 값을 채워나간다
  for (let r = 0; r < n - 1; r++) {
    for (let i = 0; i < n - r - 1; i++) {
      const j = i + r + 1;
      for (let k = i; k < j; k++) {
        M[i][j] = M[i][k] + M[k + 1][j] + p[i][0] * p[k][1] * p[j][1];
      }
    }
  }
  return M[0][n - 1];
}
console.log(matrixChain(3, matrixSize));

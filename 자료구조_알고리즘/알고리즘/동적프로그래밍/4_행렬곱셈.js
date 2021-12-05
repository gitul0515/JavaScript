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

// 행렬곱 A_i...A_j를 구하는 최소 비용 (미완성)
// rMatrixChain(i, j)


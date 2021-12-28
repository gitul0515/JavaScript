// 조약돌 놓기 문제
// w[i][p]
// i열이 패턴 p로 놓일 때 i열에 돌이 놓인 곳의 점수 합
const w = [
  [null, 6, -8, 11], // 패턴 0(null), 패턴 1, 패턴 2, 패턴 3
  [null, 7, 10, 12],
  [null, 12, 14, 7],
  [null, -5, 9, 4],
  [null, 5, 7, 8],
  [null, 3, 13, -2],
  [null, 11, 8, 9],
  [null, 3, 5, 4]
];
w.forEach(elem => elem.push(elem[1] + elem[3])); // 패턴 4

// 패턴 p와 패턴 q가 양립할 수 있는지 확인
function patternCheck(p, q) {
  if (p === 1) {
    return q === 2 || q === 3;
  } else if (p === 2) {
    return q === 1 || q === 3 || q === 4;
  } else if (p === 3) {
    return q === 1 || q === 2;
  } else if (p === 4) {
    return q === 2;
  }
}

// i열이 패턴 p로 놓일 때 i열까지의 최대 점수 합
function pebble(i, p) {
  if (i === 0) return w[i][p];
  else {
    let max = -1000000;
    for (let q = 1; q <= 4; q++) {
      if (patternCheck(p, q)) { // 패턴 p와 q가 양립하는지 확인한다
        const temp = pebble(i - 1, q);
        if (temp > max) max = temp;
      }
    }
    return max + w[i][p];
  }
}
console.log(pebble(3, 1)); // 29

// i열까지 조약돌을 놓은 방법 중 최대 점수 합
function pebbleSum(i) {
  let max = -1000000;
  for (let p = 1; p <= 4; p++) {
    const temp = pebble(i, p);
    if (temp > max) max = temp;
  }
  return max;
}
console.log(pebbleSum(3)); // 55

// 최적화 1: Memoization
function pebbleMemo(i, p) {
  // Memo 배열 생성
  const M = [];
  for (let i = 0; i < 8; i++) {
    M.push([null]);
    for (let j = 1; j <= 4; j++) {
      M[i][j] = 0; // 초기화
    }
  }

  return (function _pebbleMemo(i, p) {
    if (M[i][p] !== 0) return M[i][p];

    if (i === 0) M[i][p] = w[i][p];
    else {
      let max = -1000000;
      for (let q = 1; q <= 4; q++) {
        if (patternCheck(p, q)) { // 패턴 p와 q가 양립하는지 확인한다
          const temp = _pebbleMemo(i - 1, q);
          if (temp > max) max = temp;
        }
      }
      M[i][p] = max + w[i][p];
    }
    return M[i][p];
  }(i, p));
}
console.log(pebbleMemo(3, 1)); // 29

// 최적화 2: Dynamic Programming
function pebbleDynamic(i, p) {
  if (i === 0) return w[i][p];

  // 초기화
  // D[x][y]: x열이 패턴 y로 놓일 때 x열까지의 최대 점수 합
  const D = [];
  for (let j = 0; j <= i; j++) D.push([null]);
  D[0] = w[0].slice(); // 0열을 얕은 복사한다

  for (let x = 1; x <= i; x++) { // 1열부터 i열까지
    for (let y = 1; y <= 4; y++) { // 패턴 1부터 패턴 4까지
      let max = -1000000;
      for (let q = 1; q <= 4; q++) {
        if (patternCheck(y, q)) { // 패턴 y와 q가 양립하는지 확인한다
          const temp = D[x - 1][q];
          if (temp > max) max = temp;
        }
      }
      D[x][y] = max + w[x][y];
    }
  }
  console.log(D);
  return D[i][p];
}
console.log(pebbleDynamic(3, 1));

// new Array()의 문제점
// const D = new Array(4).fill([null]);
// D[0] = w[0].slice(); // 0열을 얕은 복사한다
// D[1][1] = 1;
// D[1][2] = 2;
// D[1][3] = 3;
// D[1][4] = 4;
// D[2][1] = 1000;
// D[2][2] = 2000;
// D[2][3] = 3000;
// D[2][4] = 4000;
// D[3][1] = 100;
// D[3][2] = 200;
// D[3][3] = 300;
// D[3][4] = 400;
// console.log(D);

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

      }
    }
  }
}

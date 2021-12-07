// 최장공통부분순서(LCS) 알고리즘
// 두 문자열에 공통적으로 들어있는 부분순서 중 가장 긴 것을 찾는다

// 두 문자열 X[1...i]와 Y[1...j]의 LCS 길이를 찾는다
function LSC(X = '', Y = '') {
  const i = X.length;
  const j = Y.length;

  return (function _LSC(i, j) {
    let length;

    if (i === 0 || j === 0) length = 0; // 문자열의 길이가 0이면 LCS가 없다
    else if (i > 0 && j > 0 && X[i] === Y[j]) { // X[i]와 Y[j]가 LCS에 포함된다
      length = _LSC(i - 1, j - 1) + 1;
    } else { // X[i]와 Y[j]는 LCS에 동시에 포함되지 않는다
      length = Math.max(_LSC(i, j - 1), _LSC(i - 1, j));
    }
    return length;
  }(i, j));
}

(function main() {
  const X = 'abcbdab';
  const Y = 'bdcaba';

  const result = LSC(X, Y);
  console.log(result);
}());

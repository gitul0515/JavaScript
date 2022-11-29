// 문자열에서 가장 긴 팰린드롬의 길이 찾기
const str1 = 'ABAD';
const str2 = '토마토맛토마토';
const str3 = '토마토맛있어';

function maxPalindrome(str = '') {
  // 문자열의 길이가 2 미만이면 길이를 반환하고 끝낸다
  if (str.length < 2) return str.length;

  // 초기화
  let max = 1;
  const D = Array.from({ length: str.length }, () =>
    Array.from({ length: str.length }, () => false)
  );
  /* D[i][j] : str[i]에서 str[j]까지의 문자열이 회문인가를 판별한다.
      회문이면 true, 회문이 아니면 false */

  // 회문의 길이 1
  for (let i = 0; i < str.length; i++) {
    D[i][i] = true;
  }

  // 회문의 길이 2
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      D[i][i + 1] = true;
      max = 2;
    }
  }

  // 회문의 길이 3 이상
  for (let cnt = 3; cnt <= str.length; cnt++) {
    for (let start = 0; start <= str.length - cnt; start++) {
      const end = start + cnt - 1;
      if (str[start] === str[end] && D[start + 1][end - 1]) {
        D[start][end] = true;
        max = cnt;
      }
    }
  }
  return max;
}
console.log(maxPalindrome(str1)); // 3
console.log(maxPalindrome(str2)); // 7
console.log(maxPalindrome(str3)); // 3

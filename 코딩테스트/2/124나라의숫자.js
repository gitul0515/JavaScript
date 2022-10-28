/* 
  124 나라의 숫자 (프로그래머스)
  나의 풀이
*/
function solution(n) {
  const answer = [];
  
  function oneTwoFour(n) {
      if (n === 1) {
          answer.push('1');
          return;
      }
      if (n === 2) {
          answer.push('2');
          return;
      }
      if (n === 3) {
          answer.push('4');
          return;
      }
      const quotient = Math.floor(n / 3);
      const remainder = n % 3;
      
      if (remainder === 0) {
          answer.push('4');
          oneTwoFour(quotient - 1);
      } else {
          answer.push(String(remainder));
          oneTwoFour(quotient);
      }
  }
  oneTwoFour(n);
  return answer.reverse().join('');
}

/* 메모
  - 여러 숫자들을 계산하면서 추정하니 규칙이 눈에 보였다. 
  - oneTwoFour(n)일 때, 
    n을 3으로 나누어 '몫'과 '나머지'를 분리한다.   
      1) 나머지가 1 또는 2인 경우 
          oneTwoFour(몫) + String(나머지)
      2) 나머지가 0인 경우 
          oneTowFour(몫 - 1) + '4'
  - 재귀를 사용하였다.
*/
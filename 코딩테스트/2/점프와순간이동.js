/* 
  점프와 순간 이동 (프로그래머스)
  나의 풀이
*/

/* 
  N까지의 최솟값
  => 1) N이 홀수인 경우: 1 + N-1까지의 최솟값
  => 2) N이 짝수인 경우: Math.min(N/2까지의 최솟값, 1 + N-1까지의 최솟값)
*/

/* 
  1. DP: 메모이제이션 O(N)
  => 효율성 검사는 통과 실패 
*/
function solution(n) { 
  const memo = [undefined, 1, 1, 2];
  function minUsage(n) {
      if (memo[n]) {
        return memo[n];
      }
      if (n % 2 === 1) {
        memo[n] = 1 + minUsage(n - 1);
        return memo[n];
      }
      memo[n] = Math.min(minUsage(n / 2), 1 + minUsage(n - 1));
      return memo[n];
  }
  return minUsage(n);
}

/* 
  2. DP: 바텀업 O(N)
  => 효율성 검사는 통과 실패 
*/
function solution(n) {
    const bottomUp = [undefined, 1];
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            bottomUp[i] = Math.min(bottomUp[i / 2], 1 + bottomUp[i - 1]);
        } else {
            bottomUp[i] = 1 + bottomUp[i - 1];
        }
    }
    return bottomUp[n];
}

/* 
  도착점(N)에서 출발점(0)까지의 이동을 생각한다. O(log2 N)
  N이 짝수이면 2로 나누고, 
  N이 홀수이면 1을 뺀다 (answer++)
  => 정확성, 효율성 검사 통과 성공
*/
function solution(n) {
  let answer = 0;    
  while (n) {
      if (n % 2 === 0) {
          n /= 2;
      } else {
          n -= 1;
          answer ++;
      }
  }
  return answer;
}

/* 메모
  - N의 최대값이 10억으로 매우 크다. 
  - DP로 풀 수 있었으나 효율성이 통과되지 않았다. 
    심지어 Bottom-up도 통과가 안 된다.
    O(n)보다 더 빨라야 한다는 의미이다. 
  - N을 2로 연속적으로 나누는 방식을 사용하였다.
    O(log2 n) 
  - 출발점(0)에서 도착점(N)이 아니라, 반대로 
    도착점(N)에서 출발점(0)을 생각하여 값을 계산한다. 
  - 초기에 위 방법을 떠올렸으나, 
    수동 테스트와 불일치하여 받아들이지 않았다. 
    결과적으로, 수동 테스트가 틀렸던 것이었다. 
    (앞으로도 이런 일이 발생할 수 있다. 주의해야 한다.
      수동 테스트가 정확한지 한 번 더 의심할 필요가 있다)
*/
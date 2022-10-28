/* 
  하노이의 탑 (프로그래머스)
  나의 풀이
*/

function solution(n) {
  const answer = [];

  function hanoi(n, start, end, mid) {
      if (n === 1) {
        answer.push([start, end]);
        return;
      }
      hanoi(n - 1, start, mid, end);
      hanoi(1, start, end, mid);
      hanoi(n - 1, mid, end, start);
  }
  hanoi(n, 1, 3, 2);
  return answer;
}

/* 
    다른 사람의 좋은 풀이 
    - 매개변수에 초기값 
    - 스프레드 연산자 
*/

function hanoi(n, from = 1, by = 2, to = 3) {
  return (n === 1) ? [[from, to]] : [...hanoi(n-1, from, to, by), ...hanoi(1, from, by, to), ...hanoi(n-1, by, from, to)]
}

function solution(n) {
  // 3진법으로 변환
  const tern = n.toString(3);

  // 3진법 뒤집기
  const reverseTern = [...tern].reverse().join('');

  // 10진법으로 변환
  const decimal = parseInt(reverseTern, 3);

  return decimal;
}

console.log(solution(45));
console.log(solution(125));


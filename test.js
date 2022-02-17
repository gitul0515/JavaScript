function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter(item => item !== min);
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));

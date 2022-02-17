function solution(d, budget) {
  if (d[0] > budget) {
    return solution(solution(d.slice(1), budget));
  }
  if (d.length === 1) return 0;
  return Math.max(1 + solution(d.slice(1), budget - d[0]), solution(d.slice(1), budget));
}

console.log(solution([1, 3, 2, 5, 4], 9));

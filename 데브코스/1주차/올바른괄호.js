// 스택 활용
function solution(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.pop() !== "(") {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false

// 스택 미활용
function solution2(s) {
  let count = 0;
  for (const c of s) {
    if (c === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

console.log(solution2("()()")); // true
console.log(solution2("(())()")); // true
console.log(solution2(")()(")); // false
console.log(solution2("(()(")); // false
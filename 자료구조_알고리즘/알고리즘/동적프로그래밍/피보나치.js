// 피보나치 수열 함수 (기본)
function fibo(n) {
  if (n === 1 || n === 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.time('fibo()의 경과시간: ');
for (let i = 1; i <= 10; i++) {
  process.stdout.write(`${fibo(i)} `);
}
console.log();
console.timeEnd('fibo()의 경과시간: ');

// 피보나치 수열 함수 (Memoization)
const memo = new Array(1 + 10).fill(-1);
function fiboMemo(n) {
  if (n === 1 || n === 2) return 1;
  else if (memo[n] > -1) return memo[n]; // 기록된 값이 있다면 그 값을 반환한다
  else {
    memo[n] = fibo(n - 1) + fibo(n - 2);
    return memo[n];
  }
}

console.time('fiboMemo()의 경과시간: ');
for (let i = 1; i <= 10; i++) {
  process.stdout.write(`${fiboMemo(i)} `);
}
console.log();
console.timeEnd('fiboMemo()의 경과시간: ');

// 피보나치 수열 함수 (bottom-up)
function fiboDynamic(n) {
  const f = [null];
  f[1] = 1; f[2] = 1;
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}
console.log(fiboDynamic(8));

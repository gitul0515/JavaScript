// 가장 큰 수 (시간 초과)
function solution(numbers) {
  const numbersToString = [];
  for (let i = 0; i < numbers.length; i++) {
    numbersToString[i] = numbers[i].toString();
  }

  numbersToString.sort((a, b) => {
    let i = 0;
    let maxDigitNumberA = a[i];
    let maxDigitNumberB = b[i];

    while(maxDigitNumberA === maxDigitNumberB && i < 3) {
      i++;
      maxDigitNumberA = a[i] || maxDigitNumberA;
      maxDigitNumberB = b[i] || maxDigitNumberB;
    }
    return maxDigitNumberB - maxDigitNumberA;
  });
  const result = numbersToString.join('');
  return result[0] === '0' ? '0' : result;
}

// 가장 큰 수 (통과)
function solution(numbers) {
  function compareFunc(a, b) {
    if (a + b < b + a) return 1;
    if (a + b > b + a) return -1;
    return 0;
  }

  const numbersToString = [];
  for (let i = 0; i < numbers.length; i++) {
    numbersToString[i] = numbers[i].toString();
  }

  numbersToString.sort(compareFunc);
  const result = numbersToString.join('');
  return result[0] === '0' ? '0' : result;
}

console.log(solution([0, 0, 0, 0]));
module.exports = solution;
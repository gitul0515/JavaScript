// 가장 큰 수
function solution(numbers) {
  // 1. 최대 자리 숫자가 높은 것이 우선순위가 높다. 
  numbers.sort((a, b) => {
    let i = 0;
    const stringA = a.toString();
    const stringB = b.toString();
    let maxDigitNumberA = stringA[i];
    let maxDigitNumberB = stringB[i];

    while(maxDigitNumberA === maxDigitNumberB && i < 3) {
      i++;
      maxDigitNumberA = stringA[i] || maxDigitNumberA;
      maxDigitNumberB = stringB[i] || maxDigitNumberB;
    }
    return maxDigitNumberB - maxDigitNumberA;
  });
  const result = numbers.join('');
  if (result.match(/0/g).length === numbers.length) return '0';
  return result;
}

// 가장 큰 수
function solution(numbers) {
  // 모든 요소가 0인 경우
  if (numbers.every(elem => elem === 0)) return '0';

  const numbersToString = [];
  for (let i = 0; i < numbers.length; i++) {
    numbersToString[i] = numbers[i].toString();
  }

  numbersToString.sort(compareFunc);
  const result = numbersToString.join('');
  return result;
}

// a와 b를 순서를 바꾸어 조합한 뒤에 비교한다. 
function compareFunc(a, b) {
  if (a + b < b + a) return 1;
  if (a + b > b + a) return -1;
  return 0;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0, 0, 0]));


function solution(number, k) {
  let result = '';
  let firstIdx = 0;
  const lastIdx = number.length - 1;

  /* 
    k개의 수를 제거했을 때 얻을 수 있는 최대 숫자는
    number.length - k개의 수를 뽑았을 때 얻을 수 있는 최대 숫자다.
  */
  let count = number.length - k; 
  while (count > 0) {
    // 뽑아야 할 숫자의 개수 === 검사할 숫자의 개수일 경우
    if (count === number.length - firstIdx) {
      result += number.slice(firstIdx);
      break;
    }

    // number[firstIdx]부터 number[lastIdx - (count - 1)]의 숫자 중 최대 숫자를 구한다. 
    let maxNum = number[firstIdx];
    let maxIdx = firstIdx;
    for (let i = firstIdx; i <= lastIdx - (count - 1); i++) {
      if (number[i] > maxNum) {
        maxNum = number[i];
        maxIdx = i;
        if (maxNum === "9") break; // 최대 숫자가 9면 더 이상 검사할 필요 없다.
      }
    }
    result += maxNum;
    firstIdx = maxIdx + 1; // 최대 숫자 이후부터 검사를 재개한다. 
    count--;
  }
  return result;
}

console.log(solution("1924", 2));  
console.log(solution("1294", 2));  
console.log(solution("1231234", 3));  
console.log(solution("4177252841", 4));  

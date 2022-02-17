function solution(s, n) {
  const array = [...s];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ' ') continue;
    let totalNum = array[i].charCodeAt() + n;
    if (totalNum > 122) {
      totalNum = totalNum % 122 + 96;
    } else if (totalNum > 90 && array[i].charCodeAt() <= 96) {
      totalNum = totalNum % 90 + 64;
    }
    array[i] = String.fromCharCode(totalNum);
  }
  return array.join('');
}
console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("Z", 3));
console.log(solution("a B z", 4));

// console.log('A'.charCodeAt());
// console.log(String.fromCharCode(65));

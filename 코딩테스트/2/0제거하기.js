function solution(s) {
  let convertCount = 0;
  let removedZeroCount = 0;
  let string = s;

  while (string !== '1') {
      const convertedString = string.replace(/0/g, '');
      convertCount += 1;
      removedZeroCount += string.length - convertedString.length;
      string = convertedString.length.toString(2);
  }
  return [convertCount, removedZeroCount];
}

console.log(solution('01110'));

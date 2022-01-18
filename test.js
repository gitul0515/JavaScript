function permutation(arr = [], r) {
  const result = [];
  // 1개를 뽑는 경우, 배열의 모든 요소를 반환한다
  if (r === 1) return arr.map(elem => [elem]);

  // 배열의 요소를 차례대로 선택(fixed)한다
  arr.forEach((fixed, index, array) => {
    // 선택한 요소를 제외한 나머지 배열
    const rest = [...array.slice(0, index), ...array.slice(index+1)];

    // 나머지에 대하여 조합을 재귀적으로 계산한다
    const combination = permutation(rest, r - 1);

    // 계산된 결과를 result 배열에 삽입한다
    combination.forEach(elem => result.push([fixed, ...elem]));
  });
  return result;
}

console.log(permutation([0, 1, 2, 3], 3));


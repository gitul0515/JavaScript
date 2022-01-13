const arr = [1, 2, 3];

function combination(n, r) {
  if (n === r || r === 0) return 1;
  return combination(n - 1, r - 1) + combination(n - 1, r);
}
console.log(combination(3, 0));
console.log(combination(3, 1));
console.log(combination(3, 2));
console.log(combination(3, 3));

function getCombination(arr = [], r) {
  const result = [];
  if (r === 1) {
    return arr.map(elem => [elem]);
  }

  arr.forEach((fixed, index, array) => {
    const rest = array.slice(index + 1);

    const combination = getCombination(rest, r - 1);
    combination.forEach(elem => result.push([fixed, ...elem]));
  });
  return result;
}

console.log(getCombination(arr, 2));

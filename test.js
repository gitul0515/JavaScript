const arr = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

arr.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
console.log(arr);

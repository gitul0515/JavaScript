const obj = {};
const arr = [1, 2, 3];
arr.forEach(elem => {
  obj[elem] = true;
});
console.log(obj);
obj[2 - 1] = false;
console.log(obj);

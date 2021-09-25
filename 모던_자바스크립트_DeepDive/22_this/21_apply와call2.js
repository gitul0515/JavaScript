// apply와 call 메서드를 사용하면
// arguments와 같은 유사 배열 객체에 배열 메서드를 사용할 수 있다.
function convertArgsToArray() {
  // console.log(arguments);

  // // arguments 객체를 배열로 변환한다.
  // const arr = Array.prototype.slice.call(arguments);

  // return arr;
}
console.log(convertArgsToArray(1, 2, 3)); // arguments

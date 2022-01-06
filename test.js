// console.log(/[a-z]{1}/.test('s'));
// console.log(/[a-z]{1}/.test(' '));
// console.log(/[a-z]{1}/.test('?'));
// console.log(/[a-z]{1}/.test('!'));

const str = 'Hello world';
const result = str.replace(/[a-z]/g, '');
console.log(result);

const str = 'Hello';

const { length: strLen } = str;
console.log(strLen);

const person = { name: 'Kwon', sex: 'male', age: 28 };
function introduce({ name, age }) {
  console.log(`${name}은 ${age < 30 ? 20 : 30}대입니다.`);
}

introduce(person);

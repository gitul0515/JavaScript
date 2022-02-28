function fn(person) {
  person = Object.assign({}, person);
  person.name = 'kwon';
  return person;
}

const obj = { name: 'lee' };
const obj2 = fn(obj);
console.log(obj, obj2);

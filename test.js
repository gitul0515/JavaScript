const obj = {
  name: 'Kwon',
  age: 28,
  address: 'Ansan',
  sayHello() {
    return `Hi, my name is ${this.name}.`;
  }
};

console.log(Object.entries(obj));
console.log();
console.log(Object.keys(obj));
console.log();
console.log(Object.values(obj));
console.log();

for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    console.log(key, obj[key]);
  }
}

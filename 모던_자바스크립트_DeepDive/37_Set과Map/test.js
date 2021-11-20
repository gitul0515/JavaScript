const obj = {
  one: 1,
  two: 2,
  three: 3
};

for (const key of Object.keys(obj)) {
  console.log(key);
}

for (const value of Object.values(obj)) {
  console.log(value);
}

for (const entry of Object.entries(obj)) {
  console.log(entry);
}

const map = new Map([['one', 1], ['two', 2]], ['three', 3]);
for (const key of map.keys()) {
  console.log(key);
}
for (const value of map.values()) {
  console.log(value);
}
for (const entry of map.entries()) {
  console.log(entry);
}

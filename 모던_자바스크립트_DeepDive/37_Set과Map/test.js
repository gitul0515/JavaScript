const map = new Map();

const kwon = { name: 'Kwon' };
const lee = { name: 'Lee' };

map
  .set(kwon, 'developer')
  .set(lee, 'designer');

console.log(map);

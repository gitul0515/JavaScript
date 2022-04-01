const array = [
  {
    name: 'Kim',
    age: 25,
    address: 'Seoul'
  },
  {
    name: 'Park',
    age: 21,
    address: 'Ansan'
  },
  {
    name: 'Lee',
    age: 23,
    address: 'Incheon'
  }
];

array.forEach(({name, ...props}) => {
  console.log(name);
  console.log(props);
});
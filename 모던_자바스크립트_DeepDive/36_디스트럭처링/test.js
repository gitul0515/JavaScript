const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false },
];

const [, , {content}] = todos;
console.log(content);

const user = {
  name: 'Lee',
  address: {
    city: 'Seoul',
    zipCode: '06581'
  }
};

const { address: {zipCode} } = user;
console.log(zipCode);

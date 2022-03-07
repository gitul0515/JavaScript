fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json()).then(console.log);

fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'PATCH',
  headers: {'content-Type': 'application/json'},
  body: JSON.stringify({
    userId: 1,
    title: 'JavaScript',
    completed: false
  })
}).then(response => response.json())
.then(result => console.log(result))
.catch(err => console.error(err));

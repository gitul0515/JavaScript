function getData() {
  return new Promise((resolve, reject) => {
    const data = 100;
    resolve(data);
    reject(new Error('invalid data'));
  })
}

getData()
.then(res => {
  console.log(res);
  return res;
})
.then(console.log)
.catch(err => console.error(err))
.finally(() => console.log('goodbye!'));
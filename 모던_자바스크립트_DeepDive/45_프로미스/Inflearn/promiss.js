const runCode = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      const num = 1;
      if (num > 10) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
  }
);

runCode.then(item => {
  console.log(`success ${item}`);
}, item => {
  console.log(`error ${item}`);
}).then(() => {
  console.log('by gonggong2');
}, () => {
  console.log('error');
}).then(() => {
  console.log('by gonggong2');
}, () => {
  console.log('error');
}).then(() => {
  console.log('by gonggong2');
}, () => {
  console.log('error');
});

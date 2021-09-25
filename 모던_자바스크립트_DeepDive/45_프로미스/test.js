const runCode = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      const num = 10;
      if (num > 9) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 1000);
  }
);

runCode.then(
  item => {
    console.log(`success ${item}`);
  }, item => {
    console.log(`error ${item}`);
  }
).then(
  () => {
    console.log('By gonggong2');
  }, () => {
    console.log('error');
  }
).then(
  () => {
    console.log('By gonggong2');
  }, () => {
    console.log('error');
  }
).then(
  () => {
    console.log('By gonggong2');
  }, () => {
    console.log('error');
  }
);

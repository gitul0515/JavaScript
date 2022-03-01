function getNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000)
  })
}

getNumber()
.then(res => {
  console.log(res); // 1
  return res + 10;
})
.then(res => {
  console.log(res); // 11
  return res + 10;
})
.then(res => {
  console.log(res); // 21
});
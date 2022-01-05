let count = 0;

const timerId = setInterval(() => {
  count++;
  console.log(count);

  if (count >= 5) {
    clearInterval(timerId);
  }
}, 1000);

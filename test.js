const startAlert = function () {
  const playAlert = setInterval(function () {
    alert('Hello!');
  }, 5000);
};
const stopAlert = function () {
  clearInterval(playAlert);
};
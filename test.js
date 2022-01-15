startAlert = function () {
  playAlert = setInterval(function() {
      alert('Hello!');
  }, 5000
  );
};

stopAlert = function () {
  clearInterval(playAlert);
};
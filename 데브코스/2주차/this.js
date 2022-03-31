function RockBand(members) {
  this.members = members;
  this.perform = function() {
    setTimeout(function() {
      this.members.forEach(function(member) { // this.members는 undefined
        member.perform();
      })
    }, 1000);
  }
}

const rockBand = new RockBand([
  {
    name: 'takuya',
    perform: function() {
      console.log('Sing: a e u i a e u i');
    }
  }
]);

rockBand.perform();
let defaultOwner = {firstName: "Kwon", lastName: "gihong"};

function getDefaultOwner() {return Object.assign({}, defaultOwner)};
function setDefaultOwner(newOwner) {defaultOwner = newOwner};

let obj = getDefaultOwner();
console.log(obj === defaultOwner); // false

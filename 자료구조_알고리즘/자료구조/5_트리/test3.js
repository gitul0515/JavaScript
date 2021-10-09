const BinarySearchTreeNode = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

const BinarySearchTree = function () {
  this.root = null;
};

const tree = new BinarySearchTree();
tree.root = new BinarySearchTreeNode(1);
// tree.root.left = new BinarySearchTreeNode(2);
// tree.root.right = new BinarySearchTreeNode(3);

// let curRoot = tree.root;
// curRoot = null;

function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };
getThisBinding.apply(tree.root) = null;
console.log(getThisBinding.apply(tree.root));

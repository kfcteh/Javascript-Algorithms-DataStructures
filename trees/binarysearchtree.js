class Node {

  constructor (val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  search(val) {

    console.log('Search Value ------>', val);
    let currentNode = this.root;

    while(currentNode) {
      console.log('Current Node------->', currentNode.value)
      if (currentNode.value === val) {
        return currentNode.value;
      } else if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
  }


  push(val) {
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val);

   while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
    }
  }
}

const node = new Node(13);
const bst = new BinarySearchTree();

bst.push(15);
bst.push(12);
bst.push(11);
bst.push(10);
bst.push(16);
bst.push(17);

const util = require('util');
console.log(util.inspect(bst, false, null));
bst.search(17);

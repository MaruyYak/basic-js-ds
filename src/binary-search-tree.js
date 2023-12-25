const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  tree = [];

  root() {
    if (this.tree.length === 0) {
      return null
    } else {
      return this.tree[0];
    }
  }

  add(data) {
    this.tree.push({data})
  }

  has(data) {
    return !!this.find(data);
  }  

  find(data) {
    return this.tree.find(element => element.data === data) || null;
  }

  remove(data) {
    this.tree = this.tree.filter(element => element.data !== data);
  }

  min() {
    let minValue = Infinity;
    this.tree.forEach((element) => {
        minValue = element.data < minValue ? element.data : minValue;
    })
    return minValue === Infinity ? null : minValue;
  }

  max() {
    let maxValue = -Infinity;
    this.tree.forEach((element) => {
        maxValue = element.data > maxValue ? element.data : maxValue;
    })
    return maxValue === -Infinity ? null : maxValue;
  }
}

module.exports = {
  BinarySearchTree
};
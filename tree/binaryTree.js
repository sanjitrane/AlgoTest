class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  addNode(value) {
    const node = new Node(value);
    this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (!root) {
      this.root = node;
    } else {
      if (node.value < root.value) {
        if (!root.left) {
          root.left = node;
        } else {
          this.insertNode(root.left, node);
        }
      } else {
        if (!root.right) {
          root.right = node;
        } else {
          this.insertNode(root.right, node);
        }
      }
    }
  }

  searchNode(value) {
    if (!this.root) {
      return null;
    }
    return this.searchTree(this.root, value);
  }

  searchTree(root, value) {
    if (!root) {
      return null;
    } else {
      if (root.value === value) {
        return root;
      } else {
        if (root.value > value) {
          return this.searchTree(root.left, value);
        } else {
          return this.searchTree(root.right, value);
        }
      }
    }
  }

  // Depth First Traversal
  //Recursive

  // visit the root-> then left nodes->right nodes
  preOrderTraversalRecursive(root, arr) {
    if (root) {
      arr.push(root.value);
      this.preOrderTraversalRecursive(root.left, arr);
      this.preOrderTraversalRecursive(root.right, arr);
    }
    return arr;
  }

  // visit the left-> then root-> right nodes
  inOrderTraversalRecursive(root, arr) {
    if (root) {
      this.inOrderTraversalRecursive(root.left, arr);
      arr.push(root.value);
      this.inOrderTraversalRecursive(root.right, arr);
    }
    return arr;
  }

  // visit the left->then right->then root
  postOrderTraversalRecursive(root, arr) {
    if (root) {
      this.postOrderTraversalRecursive(root.left, arr);
      this.postOrderTraversalRecursive(root.right, arr);
      arr.push(root.value);
    }
    return arr;
  }

  //----

  //Iterative
  /**Time: O(N) , Space: O(H), where H is the height of the tree.
   * Worst case (skewed tree) N nodes
   * Balanced Tree O(log N)
   */
  preOrderTraversalIterative(root) {
    if (!root) return [];
    const stack = [root];
    const result = [];
    while (stack.length) {
      const node = stack.pop();
      result.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return result;
  }

  inOrderTraversalIterative(root) {
    if (!root) return [];
    const stack = [];
    let current = root;
    const result = [];
    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      result.push(current.value);
      current = current.right;
    }
    return result;
  }

  postOrderTraversalIterative(root) {
    if (!root) return [];
    const stack = [];
    const result = [];
    let prev = null;
    let current = root;
    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      const node = stack[stack.length - 1];
      if (node.right && node.right !== prev) {
        current = node.right;
      } else {
        result.push(node.value);
        prev = stack.pop();
      }
    }
    return result;
  }

  // Breadth First traversal
  levelOrder(root) {
    if (!root) {
      return [];
    }
    const result = [];
    const queue = [root];
    while (queue.length) {
      const node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  // Min value
  /**Time: o(h), h is the height of the tree, Space: O(1) */
  getMin(root) {
    if (!root) return null;
    let node = root;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  // Max value
  /**Time: o(h), h is the height of the tree, Space: O(1) */
  getMax(root) {
    if (!root) return null;
    let node = root;
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  //Size:
  /**Time: O(N), number of nodes, Space: O(w), w is the max width of the tree */
  getSize(root) {
    if (!root) return 0;
    let count = 0;
    const queue = [root];
    while (queue.length) {
      const current = queue.shift();
      count++;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return count;
  }

  //Height:
  /**Time: O(N), number of nodes, Space: O(w), w is the max width of the tree */
  getHeight(root) {
    if (!root) return -1;
    let height = -1;
    const queue = [root];
    while (queue.length) {
      const level = queue.length;
      height++;
      for (let i = 0; i < level; i++) {
        const current = queue.shift();
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
    return height;
  }

  /**Time: O(log n) , Space: O(1) */
  search(root, value) {
    if (!root) {
      return false;
    }
    let node = root;
    while (node) {
      if (node.value === value) {
        return true;
      }
      if (node.value > value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }

  delete(root, value) {
    if (!root) return null;
    //Find the node
    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
    } else {
      // Found node, check for the 3 conditions
      //Cond 1: is Leaf node
      if (!root.left && !root.right) {
        return null;
      }
      // Cond 2: has left of right node;
      if (!root.left) {
        return root.right;
      }
      if (!root.right) {
        return root.left;
      }
      //Cond 3: has left and right node;
      if (root.left && root.right) {
        root.value = this.getMin(root.right);
        // delete the node
        root.right = this.delete(root.right, root.value);
      }
    }
    return root;
  }
}

const bst = new BinaryTree();
bst.addNode(10);
bst.addNode(5);
bst.addNode(15);
bst.addNode(3);
bst.addNode(7);

// console.log(bst.preOrderTraversalRecursive(bst.root, []));
// console.log(bst.inOrderTraversalRecursive(bst.root, []));
// console.log(bst.postOrderTraversalRecursive(bst.root, []));
// console.log(bst.preOrderTraversalIterative(bst.root, []));
// console.log(bst.inOrderTraversalIterative(bst.root, []));
// console.log(bst.postOrderTraversalIterative(bst.root, []));
// console.log(bst.levelOrder(bst.root));
// console.log(bst.getMin(bst.root));
// console.log(bst.getMax(bst.root));
// console.log(bst.getSize(bst.root));
// console.log(bst.getHeight(bst.root));
// console.log(bst.search(bst.root, 25));
console.log(bst);
console.log(bst.delete(bst.root, 10));

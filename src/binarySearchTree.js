class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);

    /**
     *  refactor out to use recursion
     */

    // let current = this.root;
    // let parent;
    // while (true) {
    //   parent = current;
    //   if (data < current.data) {
    //     current = current.left;
    //     if (current === null) {
    //       parent.left = newNode;
    //       break;
    //     }
    //   } else {
    //     current = current.right;
    //     if (current === null) {
    //       parent.right = newNode;
    //       break;
    //     }
    //   }
    // }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    // if the root is null then tree is empty
    if (node === null) return null;
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      const aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  search(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.search(node.left, data);
    }
    if (data > node.data) {
      return this.search(node.right, data);
    }
    // found, return node
    return node;
  }

  // Traverse the left subtree i.e perform inorder on left subtree
  // Visit the root
  // Traverse the right subtree i.e perform inorder on right subtree
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  postOrder(node) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
  preOrder(node) {
    if (node != null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  getRootNode() {
    return this.root;
  }
}

// example
const bst = new BinarySearchTree();
bst.insert(14);
bst.insert(27);
bst.insert(11);
bst.insert(7);
bst.insert(21);
bst.insert(16);
bst.insert(12);
bst.insert(3);
bst.insert(8);
bst.insert(29);
bst.inOrder(bst.getRootNode());

// Removing node with no children
bst.remove(8);

bst.inOrder(bst.getRootNode());

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
        this.insertNode(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
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
}

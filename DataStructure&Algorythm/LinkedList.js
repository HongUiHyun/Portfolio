function Node(element) {
  this.element = element;
  this.next = null;
}

function singlyLinkedListNode() {
  this.head = null;
  this.size = 0;
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;
      this.head = new Node(value);
      this.head.next = tmp;
    }
    this.size++;
  }

  remove(value) {
    let currentNode = this.head;
    let preNode = currentNode;
    if (currentNode.element == value) {
      this.head = currentNode.next;
    } else {
      while (currentNode.next) {
        if (currentNode.element == value) {
          preNode.next = currentNode.next;
          preNode = currentNode;
          currentNode = currentNode.next;
          break;
        }
        preNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (currentNode.element == value) {
      preNode.next = null;
    }
    this.size--;
    console.log(currentNode);
  }

  getList() {
    let currentNode = this.head;
    let listArr = [];
    while (currentNode.next !== null) {
      listArr.push(currentNode.element);
      if (currentNode.next.next == null) {
        listArr.push(currentNode.next.element);
      }
      currentNode = currentNode.next;
    }
    console.log(listArr);
  }
}

let linkedList = new singlyLinkedList();
linkedList.insert(1);
linkedList.insert(12);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(6);
linkedList.remove(3);
console.log(linkedList);
linkedList.getList();

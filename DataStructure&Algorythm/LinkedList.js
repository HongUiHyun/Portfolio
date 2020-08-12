/**
 *Linked list
 * Easy to insert/delete but searching is slow
 */
//Singly liked list
function Node(element) {
  this.element = element;
  this.next = null;
}

class SinglyLinkedList {
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
    return listArr;
  }

  has(value) {
    var currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.element == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  reverse(sll) {
    let node = sll.head,
      prev = null;

    while (node) {
      let tmp = node.next;
      node.next = prev;
      prev = node;
      if (!tmp) {
        break;
      }
      node = tmp;
    }
    return node;
  }
}

function DoubleylinkedListNode(value) {
  this.element = value;
  this.prev = null;
  this.next = null;
}

// Doubly likedlist
class DoubleylinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    let currentNode = new DoubleylinkedListNode(value);
    if (this.head === null) {
      this.head = currentNode;
      this.tail = this.head;
    } else {
      currentNode.next = this.head;
      this.head.prev = currentNode;
      this.head = currentNode;
    }
    this.size++;
  }

  append(value) {
    let currentNode = new DoubleylinkedListNode(value);
    if (this.tail == null) {
      this.tail = currentNode;
      this.head = this.tail;
    } else {
      currentNode.prev = this.tail;
      this.tail.next = currentNode;
      this.tail = currentNode;
    }
    this.size++;
  }

  insertAt(index, value) {
    function findNode(index, head) {
      for (var i = 0; i < index; i++) {
        head = head.next;
      }
      return head;
    }

    if (index == 0) {
      this.prepend(value);
      return 0;
    } else if (index + 1 == this.size) {
      this.append(value);
      return 0;
    } else if (index + 1 > this.size) {
      throw "index doesn't exist";
    } else {
      let head = this.head;
      let currentNode = new DoubleylinkedListNode(value);
      let preNode = findNode(index - 1, head);
      let nextNode = findNode(index, head);
      currentNode.prev = preNode;
      currentNode.next = nextNode;
      nextNode.prev = currentNode;
      preNode.next = currentNode;
    }
    this.size++;
  }
  removeHead() {
    if (this.head == this.tail) {
      headNode == null;
      this.tail == null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  removeTail() {
    if (this.tail != null) {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    this.size--;
  }

  getList() {
    let currentNode = this.head,
      tmpArr = [];
    for (var i = 0; i < this.size; i++) {
      tmpArr.push(currentNode.element);
      currentNode = currentNode.next;
    }
    return tmpArr;
  }

  indexOfValue(index) {
    let listSize = this.size;
    if (index + 1 > listSize) {
      throw ": Index doesn't exist.";
    }

    if (index < listSize / 2) {
      let node = this.head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }
      return node.element;
    } else {
      let node = this.tail;
      for (var i = listSize; i > index + 1; i--) {
        node = node.prev;
      }
      return node.element;
    }
  }

  indexOf(value) {
    let currentNode = this.head,
      index = 0;
    while (currentNode.element != value) {
      currentNode = currentNode.next;
      index++;
      if (currentNode == null) {
        return -1;
      }
    }
    return index;
  }

  removeAt(index) {
    function findNode(index, head) {
      for (var i = 0; i < index; i++) {
        head = head.next;
      }
      return head;
    }

    if (index == 0) {
      this.removeHead();
    } else if (index == this.size - 1) {
      this.removeTail();
    } else {
      let head = this.head;
      let preNode = findNode(index - 1, head);
      let currentNode = findNode(index, head);
      let nextNode = findNode(index + 1, head);

      preNode.next = nextNode;
      nextNode.prev = preNode;
    }
    this.size--;
  }
}

/**
 * Other methods
 */

function removeDuplication(sll) {
  var hashTable = {},
    tmp = sll.head,
    prev = null;
  console.log(tmp);

  while (tmp) {
    if (!hashTable[tmp.element]) {
      hashTable[tmp.element] = true;
      prev = tmp;
    } else {
      prev.next = tmp.next;
      sll.size--;
    }
    if (!tmp) break;
    tmp = tmp.next;
  }
  console.log(hashTable);
}
let linkedList = new SinglyLinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(2);
linkedList.insert(3);
removeDuplication(linkedList);
console.log(linkedList);

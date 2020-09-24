/**
 * caching
 */

function LFUNode(key, value) {
  this.prev = null;
  this.next = null;
  this.key = key;
  this.element = value;
  this.freqCnt = 1;
}

function LFUDoublyLinkedList() {
  this.head = new LFUNode("buffer head", null);
  this.tail = new LFUNode("buffer tail", null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
}

function LFUCache(capacity) {
  this.keys = {};
  this.freq = {};
  this.capacity = capacity;
  this.minFreq = 0;
  this.size = 0;
}

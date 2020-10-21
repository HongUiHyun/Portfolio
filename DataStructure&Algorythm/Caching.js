/**
 * LRU
 */

function DLLnode(key,value){
  this.key =key;
  this.data = value;
  this.next = null;
  this.prev = null;
}

function LRUCache(capacity){
  this.keys = {};
  this.dd = {};
  this.capacity =capacity;
  this.head = new DLLnode('',null);
  this.tail = new DLLnode('',null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}


LRUCache.prototype.removeNode= function(node){
  let prev = node.prev,next = node.next;
  prev.next = next;
  next.prev = prev;
}


LRUCache.prototype.addNode = function(node){
  let realTail = this.tail.prev;
  realTail.next= node;

  this.tail.prev =node;
  node.prev = realTail;
  node.next = this.tail;
}

LRUCache.prototype.get = function(key){
  let node = this.keys[key];

  if(node==undefined){
    return null;
  }else{
    this.removeNode(node);
    this.addNode(node);
    return node.data;
  }
}


LRUCache.prototype.set = function(key,value){
  var node = this.keys[key];
  if(node){
    this.removeNode(node);
  }

  let newNode= new DLLnode(key,value);
  this.addNode(newNode);
  this.keys[key]= newNode;

  if(Object.keys(this.keys).length >  this.capacity){
    let realHead = this.head.next;
    this.removeNode(realHead);
    delete this.keys[realHead.key];
  }
  
}
var aa = new LRUCache(5);
aa.set(1,1);
aa.set(2,2);
aa.set(3,4);
aa.set(4,4);
aa.set(5,5);
aa.get(1);

// aa.get(2);

// console.log(aa);

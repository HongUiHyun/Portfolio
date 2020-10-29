/**
 * Hash table
 */
//linear probing
function hashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

hashTable.prototype.initArray = function (size) {
  var tmpArr = [];
  for (var i = 0; i < size; i++) {
    tmpArr.push(null);
  }
  return tmpArr;
};

hashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";
  return key % this.size;
};

hashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";

  var hashIdx = this.hash(key);

  while (this.keys[hashIdx] != null) {
    hashIdx++;
    hashIdx = hashIdx % this.size;
  }

  this.keys[hashIdx] = key;
  this.values[hashIdx] = value;
  this.limit++;
};

hashTable.prototype.get = function (key) {
  var hashIdx = this.hash(key);
  while (this.keys[hashIdx] != key) {
    hashIdx++;
    hashIdx = hashIdx % this.size;
  }

  return this.values[hashIdx];
};

//quadratic probing
function hashTableQuadratic(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

hashTableQuadratic.prototype.initArray = function (size) {
  var tmpArr = [];
  for (var i = 0; i < size; i++) {
    tmpArr.push(null);
  }
  return tmpArr;
};

hashTableQuadratic.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";
  return key % this.size;
};

hashTableQuadratic.prototype.put = function (key, value) {
  var hashIdx = this.hash(key),
    squreIdx = 1;
  while (this.keys[hashIdx] != null) {
    hashIdx += Math.pow(squreIdx, 2);
    hashIdx = hashIdx % this.size;
    squreIdx++;
  }

  this.keys[hashIdx] = key;
  this.values[hashIdx] = value;
  this.limit++;
};

hashTableQuadratic.prototype.get = function (key) {
  if (this.limit >= this.size) throw "hash table is full";

  var hashIdx = this.hash(key),
    squreIdx = 1;

  while (this.key[hashIdx] != key) {
    hashIdx += Math.pow(squreIdx, 2);
    hashIdx = hashIdx % this.size;
    squreIdx++;
  }

  return this.values[hashIdx];
};

//double hash

function doubleHashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

doubleHashTable.prototype.initArray = function (size) {
  var tmpArr = [];
  for (var i = 0; i < size; i++) {
    tmpArr.push(null);
  }
  return tmpArr;
};

doubleHashTable.prototype.doublehash = function (hasedKey) {
  var R = this.size - 2;
  return R - (hasedKey % R);
};

doubleHashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";
  return this.doublehash(key % this.size);
};

doubleHashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";

  var hashIdx = this.hash(key);
  while (this.keys[hashIdx] != null) {
    hashIdx++;
    hashIdx = hashIdx % this.size;
  }

  this.keys[hashIdx] = key;
  this.values[hashIdx] = value;
  this.limit++;
};

doubleHashTable.prototype.get = function (key) {
  var hashIdx = this.hash(key);

  while (this.keys[hashIdx] != key) {
    hashIdx++;
    hashIdx = hashIdx % this.size;
  }

  return this.values[hashIdx];
};

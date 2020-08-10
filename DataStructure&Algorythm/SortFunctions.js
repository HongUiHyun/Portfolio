/**
 * Swap array element
 */
function swapElement(arr, index1, index2) {
  let tmpElement = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmpElement;
}

/**
 * Bubble sort
 * Most simplest but worst sort algorythm.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function bubbleSort(arr) {
  let arrLen = arr.length;
  for (var i = 0; i < arrLen; i++) {
    for (var n = 0; n <= i; n++) {
      if (arr[i] < arr[n]) {
        swapElement(arr, i, n);
      }
    }
  }
  return arr;
}

function bubbleSortReverse(arr) {
  let arrLen = arr.length;
  for (var i = 0; i < arrLen; i++) {
    for (var n = 0; n <= i; n++) {
      if (arr[n] < arr[i]) {
        swapElement(arr, i, n);
      }
    }
  }
  return arr;
}
/**
 * Selection sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function selectionSort(arr) {
  let arrLen = arr.length,
    min;

  for (var i = 0; i < arrLen; i++) {
    min = i;

    for (var n = i + 1; n < arrLen; n++) {
      if (arr[n] < arr[min]) {
        min = n;
      }
    }

    if (i !== min) {
      swapElement(arr, i, min);
    }
  }
  return arr;
}

function selectionSortReverse(arr) {
  let arrLen = arr.length,
    min;

  for (var i = 0; i < arrLen; i++) {
    min = i;

    for (var n = i + 1; n < arrLen; n++) {
      if (arr[n] > arr[min]) {
        min = n;
      }
    }

    if (i !== min) {
      swapElement(arr, i, min);
    }
  }
  return arr;
}

/**
 *Insertion sort
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function insertionSort(arr) {
  let arrLen = arr.length,
    value;

  for (var i = 1; i < arrLen; i++) {
    value = arr[i];
    console.log(value);

    for (var n = i - 1; n > -1 && arr[n] > value; n--) {
      arr[n + 1] = arr[n];
    }

    arr[n + 1] = value;
  }
  console.log(arrLen);
  return arr;
}

function insertionSortReverse(arr) {
  let arrLen = arr.length,
    value;

  for (var i = 1; i < arrLen; i++) {
    value = arr[i];
    console.log(value);

    for (var n = i - 1; n > -1 && arr[n] < value; n--) {
      arr[n + 1] = arr[n];
    }

    arr[n + 1] = value;
  }
  console.log(arrLen);
  return arr;
}

/**
 * Quick sort
 * Time complexity: average - O(nlog2(n)), worst - O(n^2)
 * Space complexity: O(nlog2(n))
 */

function partition(arr, left, right) {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (pivot > arr[left]) {
      left++;
    }
    while (pivot < arr[right]) {
      right--;
    }
    if (left <= right) {
      swapElement(arr, left, right);
      left++;
      right--;
    }
  }
  // console.log("left: "+left+" right: "+right);
  // console.log(arr);
  return left;
}

function quickSort(arr) {
  function quickSorting(arr, left, right) {
    let pivotIdx;
    if (arr.length > 1) {
      pivotIdx = partition(arr, left, right);

      if (left < pivotIdx - 1) {
        quickSorting(arr, left, pivotIdx - 1);
      }
      if (pivotIdx < right) {
        quickSorting(arr, pivotIdx, right);
      }
    }
  }

  quickSorting(arr, 0, arr.length - 1);
  return arr;
}

/**
 * quickselect
 * Time complexity: O(n)
 *
 */
function nthLowElement(arr, k) {
  function quickSorting(arr, left, right, k) {
    let pivotIdx = partition(arr, left, right);
    if (pivotIdx === k - 1) {
      console.log(pivotIdx);
      console.log(arr[pivotIdx]);
      return arr[pivotIdx];
    } else if (pivotIdx > k - 1) {
      return quickSorting(arr, left, pivotIdx - 1, k);
    } else {
      return quickSorting(arr, pivotIdx, right, k);
    }
  }
  return quickSorting(arr, 0, arr.length - 1, k);
}
/**
 * Merge sort
 * Time complexity: O(nlog2(n))
 * Space complexity: O(n)
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2),
    leftArr = arr.splice(0, mid),
    rightArr = arr;
  let result = merge(mergeSort(leftArr), mergeSort(rightArr));
  return result;
}

function merge(leftArr, rightArr) {
  let leftIdx = 0,
    rightIdx = 0,
    tmp = [];

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      tmp.push(leftArr[leftIdx++]);
    } else {
      tmp.push(rightArr[rightIdx++]);
    }
  }
  let remainLeft = leftArr.splice(leftIdx),
    remainRight = rightArr.splice(rightIdx);
  tmp = tmp.concat(remainLeft).concat(remainRight);

  return tmp;
}

/**
 * Count sort
 * Can only be used in number array and should set the ragement.
 * Time complexity: O(k+n)
 * Space complexity: O(k)
 */
function countSort(arr) {
  let hashtable = {},
    result = [];

  for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
    if (!hashtable[arr[i]]) {
      hashtable[arr[i]] = 1;
    } else {
      hashtable[arr[i]]++;
    }
  }
  for (var key in hashtable) {
    for (var n = 0; n < hashtable[key]; n++) {
      result.push(parseInt(key));
    }
  }
  return result;
}

/**
 * Bulit in sort method in Javascript
 *
 */

const tmpArr = [2, 10, 7, 8, 5, 4, 1, 3];
tmpArr.sort();
// when it doesn't get comparing function, it retuns [ 1, 10, 2, 3, 4, 5, 7, 8 ]

//Ascent sort
function jsSortAsc(a, b) {
  return a - b;
}
//Descent sort
function jsSortDesc(a, b) {
  return b - a;
}

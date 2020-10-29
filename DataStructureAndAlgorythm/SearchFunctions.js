/*
 *Linear search
 *Can be used in unsorted array and sorted array
 */
function linearSearch(arr, target) {
  for (var element of arr) {
    if (element === target) {
      return true;
    }
  }
  return false;
}
/*
 *Binary search
 *Can be used in sorted array
 */
function binarySearch(arr, target) {
  let startIdx = 0,
    endIdx = arr.length - 1;

  while (startIdx < endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (target === arr[midIdx]) {
      return midIdx;
    } else if (target > arr[midIdx]) {
      startIdx = midIdx;
    } else {
      endIdx = midIdx;
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3], 6)); //false
console.log(linearSearch([1, 2, 3], 3)); //true
console.log(binarySearch([2, 3, 4, 5, 6, 7], 5)); //3

/**
 * Other algorythms
 */

//squre root for integer with binary search.
function sqrtInt(num) {
  if (num === 0 || num === 1) return num;

  var start = 0,
    end = num,
    result;
  while (start <= end) {
    let midPoint = parseInt((start + end) / 2);
    if (midPoint * midPoint == num) {
      return midPoint;
    } else if (midPoint * midPoint > num) {
      end = midPoint - 1;
    } else {
      start = midPoint + 1;
    }
  }
}

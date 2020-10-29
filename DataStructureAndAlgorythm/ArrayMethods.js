function checkDuplication(arr) {
  let tmpSet = new Set(arr);
  return tmpSet.size < arr.length ? true : false;
}

function uniqueElement(arr) {
  let tmpSet = new Set(arr);
  return [...tmpSet];
}

function uniqueElementOfTwoArray(arr1, arr2) {
  let tmpSet = new Set(arr1.concat(arr2));
  return [...tmpSet];
}

function commomElementOfArrayList(arrLst) {
  let hashtable = {},
    result = [],
    arrLen = arrLst.length;

  for (var i = 0; i < arrLen; i++) {
    const currentArr = arrLst[i];
    let last = null;

    for (var n = 0, currentArrLen = currentArr.length; n < currentArrLen; n++) {
      let currentElement = currentArr[n];
      if (last !== currentElement) {
        if (!hashtable[currentElement]) {
          hashtable[currentElement] = 1;
        } else {
          hashtable[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  for (var items in hashtable) {
    if (arrLen === hashtable[items]) {
      result.push(items);
    }
  }

  return result;
}

function commomElement(arrayLst) {
  let hashtable = {},
    result = [],
    arrLen = arrayLst.length;

  for (var i = 0; i < arrLen; i++) {
    const currentArr = arrayLst[i];
    let last = null;

    for (var n = 0, currentArrLen = currentArr.length; n < currentArrLen; n++) {
      let currentElement = currentArr[n];
      if (last !== currentElement) {
        if (!hashtable[currentElement]) {
          hashtable[currentElement] = 1;
        } else {
          hashtable[currentElement]++;
        }
      }
      last = currentElement;
    }
  }

  for (var items in hashtable) {
    if (arrLen === hashtable[items]) {
      result.push(items);
    }
  }

  return result;
}

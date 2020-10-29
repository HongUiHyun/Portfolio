//Intersaction Set
function intersactionSet(setA, setB) {
  let intersaction = new Set();
  for (var element of setA) {
    if (setB.has(element)) {
      intersaction.add(element);
    }
  }
  return intersaction;
}

//Uinion set
function uinionSet(setA, setB) {
  let uinion = new Set(setA);
  for (var element of setB) {
    if (!setA.has(element)) {
      uinion.add(element);
    }
  }
  return uinion;
}

//Diffrence set
function diffrenceSet(setA, setB) {
  let diffrence = new Set();
  for (var element of setA) {
    if (!setB.has(element)) {
      diffrence.add(element);
    }
  }
  return diffrence;
}

//Super set
function isSuperSet(setA, subSet) {
  for (var element of subSet) {
    if (setA.has(element)) {
      return false;
    }
    return true;
  }
}

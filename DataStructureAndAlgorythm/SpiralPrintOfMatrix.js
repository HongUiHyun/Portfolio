function spiralPrint(matrix) {
  let topRow = 0,
    leftCol = 0,
    bottomRow = matrix.length - 1,
    rightCol = matrix[0].length - 1;

  while (topRow < bottomRow && leftCol < rightCol) {
    for (var i = 0; i <= rightCol; i++) {
      console.log(matrix[topRow][i]);
    }
    topRow++;

    for (var i = topRow; i <= bottomRow; i++) {
      console.log(matrix[i][rightCol]);
    }
    rightCol--;
    for (var i = rightCol; i >= 0; i--) {
      console.log(matrix[bottomRow][i]);
    }
    bottomRow--;
    for (var i = bottomRow; i > topRow; i--) {
      console.log(matrix[i][leftCol]);
    }
    leftCol++;
  }
}

var matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

spiralPrint(matrix);

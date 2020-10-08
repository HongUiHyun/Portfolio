const spinner = document.querySelector("#spinner");
let rotateCount = 0;
let startTime = null;
let rAF;
function draw(timeStamp) {
  if (!startTime) {
    startTime = timeStamp;
  }
  rotateCount = (timeStamp - startTime) / 10;
  console.log(rotateCount);
  if (rotateCount > 360) {
    rotateCount = rotateCount % 360;
  }

  spinner.style.transform = `rotate(${rotateCount}deg) translateX(100px)`;
  rAF = requestAnimationFrame(draw);
}

draw();

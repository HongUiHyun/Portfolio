let myGreeting = setTimeout(function () {
  alert("Hello, Mr.Universe!");
}, 2000);

function sayHi(who) {
  alert(`Hello ${who}`);
}

let greeting = setTimeout(sayHi, 2000, "Mr.Hong!");
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.querySelector(".demo").textContent = time;
}

const createClock = setInterval(displayTime, 1000);

let i = 1;

// setInterval(function run() {
//   console.log(i);
//   i++;
// }, 100);

let startTime = null;

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }
  currentTime = timestamp - startTime;
  console.log(currentTime);
  requestAnimationFrame(draw);
}

draw();

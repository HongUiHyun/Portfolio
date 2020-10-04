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

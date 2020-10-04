const display = document.querySelector(".display");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");
const recordBtn = document.querySelector(".recordBtn");
function initialize() {
  display.textContent = "00:00:00";
}
function stopWatch(minutes, seconds, miliseconds) {
  this.minutes = minutes;
  this.miliseconds = miliseconds;
  this.seconds = seconds;
}

stopWatch.prototype.start = function () {
  if (this.startWatch) {
    return 0;
  }
  this.startWatch = setInterval(() => {
    if (this.miliseconds === 10) {
      this.miliseconds = 0;
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }
    }
    this.miliseconds += 1;
    display.textContent = `${
      Number(this.minutes) <= 9 ? "0" + this.minutes : minutes
    }:${Number(this.seconds) <= 9 ? "0" + this.seconds : this.seconds}:${
      Number(this.miliseconds <= 9) ? "0" + this.miliseconds : this.miliseconds
    }`;
  }, 100);
};

stopWatch.prototype.stop = function () {
  clearInterval(this.startWatch);
};

let watch = new stopWatch(0, 0, 0);

startBtn.addEventListener("click", () => {
  const record = document.querySelector(".record");
  record.innerHTML = "";
  watch.start();
});

stopBtn.addEventListener("click", () => {
  watch.stop();
  if (watch.minutes !== 0 || watch.seconds !== 0 || watch.miliseconds !== 0) {
    watch = new stopWatch(watch.minutes, watch.seconds, watch.miliseconds);
  }
});

resetBtn.addEventListener("click", () => {
  const display = document.querySelector(".display");
  watch.stop();
  display.textContent = "00:00:00";
  watch.minutes = 0;
  watch.seconds = 0;
  watch.miliseconds = 0;
});

recordBtn.addEventListener("click", () => {
  const display = document.querySelector(".display");
  const record = document.querySelector(".record");
  const history = document.createElement("p");
  const pCnt = document.querySelectorAll(".record p");
  console.log(pCnt.length + 1);
  if (pCnt.length + 1 == 7) {
    pCnt[0].remove();
  }
  history.innerHTML = display.innerHTML;
  record.appendChild(history);
});

initialize();

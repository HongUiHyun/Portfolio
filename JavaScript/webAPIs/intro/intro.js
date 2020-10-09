const AudioContext = window.AudioContext;
const audioCtx = new AudioContext();

const audioElement = document.querySelector("audio");
const playbtn = document.querySelector("button");
const volumeslider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
playbtn.addEventListener("click", (e) => {
  if (audioCtx.state == "suspended") {
    audioCtx.resume();
  }
  if (e.target.getAttribute("class") === "paused") {
    audioElement.play();
    e.target.setAttribute("class", "playing");
    e.target.textContent = "Pause";
  } else if (e.target.getAttribute("class") === "playing") {
    audioElement.pause();
    e.target.setAttribute("class", "paused");
    e.target.textContent = "Play";
  }
});

audioElement.addEventListener("ended", () => {
  playbtn.setAttribute("class", "paused");
  playbtn.textContent = "play";
});

const gainNode = audioCtx.createGain();

volumeslider.addEventListener("input", () => {
  gainNode.gain.value = volumeslider.value;
});

audioSource.connect(gainNode).connect(audioCtx.destination);

const div = document.querySelector("div");

window.onresize = () => {
  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  div.style.width = `${winWidth}px`;
  div.style.height = `${winHeight}px`;
};

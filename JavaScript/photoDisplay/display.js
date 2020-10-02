const imgList = document.querySelectorAll(".list-img img");

for (let i = 0, listLen = imgList.length; i < listLen; i++) {
  const element = imgList[i];
  element.addEventListener("click", function (e) {
    const display = document.querySelector(".displayed-img img");
    display.src = e.target.src;
  });
}

const darkenBtn = document.querySelector(".darkenBtn");

darkenBtn.addEventListener("click", function () {
  const display = document.querySelector(".displayed-img");
  let brightness =
    !display.style.filter || display.style.filter === 100
      ? 100
      : display.style.filter.replace(/[^0-9]/g, "");
  if (brightness == 100) {
    display.style.filter = "brightness(50%)";
  } else {
    display.style.filter = "brightness(100%)";
  }
});

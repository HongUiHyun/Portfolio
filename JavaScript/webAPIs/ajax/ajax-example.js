const verseChoose = document.querySelector("#verseList");
const loremDisplay = document.querySelector("#display");
const jsonBtn = document.querySelector("#getJSON");
/**
 *  basic async and promise
 */

function updateDisplay(dummy) {
  let url = `${dummy}.txt`;

  /**
   * XMLHttpRequest
   */
  //   let request = new XMLHttpRequest();
  //   request.open("GET", url);
  //   request.responseType = "text";
  //   request.addEventListener("load", () => {
  //     loremDisplay.textContent = request.response;
  //   });
  //   request.send();

  /**
   * fetch
   */
  fetch(url).then((response) => {
    response.text().then((text) => {
      loremDisplay.textContent = text;
    });
  });
}

/**
 * using async and await instead of promise
 */

async function asyncFetch(dummy) {
  try {
    const url = `${dummy}.json`;
    const myFetch = await fetch(url);
    const text = await myFetch.json();
    let uList = document.querySelector("#personList");
    uList.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      let element = text[i];
      console.log(element);
      let personList = document.createElement("li");

      personList.textContent = `
        이름:${element.name}/
        성별:${element.gender}/
        나이:${element.age}`;
      uList.appendChild(personList);
    }
  } catch (e) {
    console.log(`There is error in operating: ${e.message}`);
  }
}

verseChoose.addEventListener("change", () => {
  updateDisplay(verseChoose.value);
});

jsonBtn.addEventListener("click", () => {
  asyncFetch("dummyJSON");
});

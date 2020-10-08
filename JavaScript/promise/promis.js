function fetchAndDecode(url, type) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        if (type === "blob") {
          return response.blob();
        } else if (type === "text") {
          return response.text();
        }
      }
    })
    .catch((e) => {
      console.log(
        `There has been a problem with your fetch operation for resource ${url}: ${e.message}`
      );
    })
    .finally(() => {
      console.log(`fetch attempt for "${url}" finished.`);
    });
}

let pic1 = fetchAndDecode("../image/pic1.jpg", "blob");
let pic2 = fetchAndDecode("../image/pic2.jpg", "blob");
let description = fetchAndDecode("../image/sample.txt", "text");

Promise.all([pic1, pic2, description]).then((values) => {
  console.log(values);

  let objURL1 = URL.createObjectURL(values[0]);
  let objURL2 = URL.createObjectURL(values[1]);

  let image1 = document.createElement("img");
  let image2 = document.createElement("img");
  image1.src = objURL1;
  image2.src = objURL2;

  let picArea = document.querySelector("#pictures");
  picArea.appendChild(image1);
  picArea.appendChild(image2);

  let descriptArea = document.querySelector("#description");
  let imgDescription = document.createElement("p");
  imgDescription.textContent = values[2];
  descriptArea.appendChild(imgDescription);
});

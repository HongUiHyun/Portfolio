const fetchAndDecode = async (url, type) => {
  try {
    let response = await fetch(url);
    let content;
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      if (type === "blob") {
        content = await response.blob();
      } else if (type === "text") {
        content = await response.text();
      }
      return content;
    }
  } catch (e) {
    throw new Error(`Fetching failed: ${e.message}`);
  }
};

const displayContent = async () => {
  try {
    let pic1 = fetchAndDecode("../image/pic1.jpg", "blob");
    let pic2 = fetchAndDecode("../image/pic2.jpg", "blob");
    let description = fetchAndDecode("../image/sample.txt", "text");

    let values = await Promise.all([pic1, pic2, description]);
    console.log(values);
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src = URL.createObjectURL(values[0]);
    img2.src = URL.createObjectURL(values[1]);

    let display = document.querySelector("#pictures");
    display.appendChild(img1);
    display.appendChild(img2);

    let context = document.createElement("p");
    context.textContent = values[2];
    document.querySelector("#description").appendChild(context);
  } catch (e) {
    console.log(e.message);
  }
};

displayContent();

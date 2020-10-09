const addBtn = document.querySelector("#addBtn");

const uList = document.querySelector("#shoppingList");

addBtn.addEventListener("click", () => {
  const item = document.querySelector("#item");
  let list = document.createElement("li");
  let shoppingItem = document.createElement("span");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    list.remove();
  });
  shoppingItem.textContent = item.value;
  shoppingItem.style.margin = "10px 20px";

  list.appendChild(shoppingItem);
  list.appendChild(deleteBtn);
  uList.appendChild(list);

  item.focus();
  item.value = "";
});

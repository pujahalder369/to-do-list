const btn = document.querySelector("#btn");
const inputEle = document.querySelector("#input");
const paraEle = document.querySelector("#paragraph");
const ulist = document.querySelector("#lists");

btn.addEventListener("click", () => {
  const taskText = inputEle.value.trim();
  if (taskText === "") {
    paraEle.textContent = "* Please add your task *";
    return;
  }

  const listEle = document.createElement("li");
  listEle.textContent = taskText;
  ulist.appendChild(listEle);

  const span = document.createElement("span");
  span.textContent = "\u00d7";
  span.className = "close";
  listEle.appendChild(span);

  span.addEventListener("click", () => {
    listEle.remove();
  });

  paraEle.textContent = "";
  inputEle.value = "";
});

ulist.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("line");
  }
});

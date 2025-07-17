const input = document.querySelector("#input");
const btnEle = document.querySelector("#btn");
const output = document.querySelector(".out");

const array = [];

function check(tasks, arr) {
  if (tasks === "") {
    input.value = "";
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (tasks === arr[i].name) {
      alert("same task");
      return false;
    }
  }
  return true;
}

function render(array) {
  output.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const divEle = document.createElement("div");
    output.appendChild(divEle);
    divEle.className = "innerDiv";
    divEle.innerHTML += `<div class = "outerDiv">
    <div class = "innerOne">${array[i].name} </div> 
    <div><i class="fa-solid fa-trash innerTwo" onclick="delTask(${i})"></i></div>
    </div>`;
  }
}

function delTask(i) {
  array.splice(i, 1);
  render(array);
}

function add() {
  const tasks = input.value.trim();
  if (check(tasks, array)) {
    array.push({
      name: tasks,
      completed: false,
    });
  }
  render(array);
  input.value = "";
}

btnEle.addEventListener("click", add);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") add();
});

// span.addEventListener("click", () => {
//   divEle.remove();
// })

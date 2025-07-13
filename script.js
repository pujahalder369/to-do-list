const btn = document.querySelector("#btn");
const inputEle = document.querySelector("#input");
const paraEle = document.querySelector("#paragraph");
const list = document.querySelector("#lists");

btn.addEventListener("click", () => {
  if (inputEle.value === "") {
    paraEle.innerHTML = `* Please add your task *`;
  } else {
    let listEle = document.createElement("li");
    listEle.innerHTML = inputEle.value;
    list.appendChild(listEle);

    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    // span.className = "close";
    // list.appendChild(span);
  }
  inputEle.value = "";
});



// function clickMe(){
//     if(inputEle.value === ""){
//         paraEle.innerHTML = `* Please add your task *`;
//     }else {
//         let listEle = document.createElement("li");
//         listEle.innerHTML = inputEle.value;
//         list.appendChild(listEle);
//     }
//     inputEle.value = "";
// }

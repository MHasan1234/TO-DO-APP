// let todo = [];

// let req = prompt("please enter your request");

// while (true) {
//   if (req == "quit") {
//     console.log("quitting app");
//     break;
//   }

//   if (req == "list") {
//     console.log("-------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("------------");
//   } else if (req == "add") {
//     let task = prompt("please enter task");
//     todo.push(task);
//     console.log("task added");
//   } else if (req == "delete") {
//     let idx = prompt("enter index of task to be deleted");
//     todo.splice(idx, 1);
//     console.log("task deleted");
//   } else {
//     console.log("wrong request");
//   }
//   req = prompt("please enter your request");
// }


let input =document.querySelector("input");
let button =document.querySelector("button");
let ul =document.querySelector("ul");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  console.log(input.value);
  input.value = "";
});

//EVENT DELEGATION
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     //console.log("element deleted");
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
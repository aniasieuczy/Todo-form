const form = document.querySelector("#newTodoForm");
const userInput = document.querySelector("#newTodoInput");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const newTodo = userInput.value;
  if (!newTodo) {
    console.log("Add a new task");
    return;
  } else {
    addTaskToList();
    e.target[0].value = "";
  }
});

function addTaskToList() {
    const element = document.createElement("div");
    element.classList.add("list");
    const input = createTodoInput();
    element.appendChild(input);
    // input.value = "";
    element.appendChild(createEditButton(input));
    element.appendChild(createDeleteButton(element));
    list.appendChild(element);

}

function createTodoInput() {
  let input = document.createElement("input");
  input.value = userInput.value;
  input.setAttribute("readOnly", "readonly");
  
  input.addEventListener("click", () => {
    input.classList.toggle("completedTask");
  });
  return input;
}

function createEditButton(input) {
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  // let input = createTodoInput();

  editBtn.addEventListener("click", function (e) {
    if (editBtn.innerText.toLowerCase() == "edit") {
      input.removeAttribute("readonly");
      input.focus();
      editBtn.innerText = "Save";
    } else {
      input.setAttribute("readOnly", "readOnly");
      editBtn.innerText = "Edit";
    }
  });
  return editBtn;
}

function createDeleteButton(element) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    // deleteBtn.classList.add("delete");
    
    deleteBtn.addEventListener("click", function (e) {
        list.removeChild(element);
    });
    return deleteBtn;
}

// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     });
// }

// list.addEventListener("click", function(e) {
//     console.log(e.target);
//     // e.target.remove();
//     e.target.classList.toggleClass("completedTask");
// })

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
// const newToDo = input.value;
// const newLi = document.createElement("li");
// newLi.innerText = newToDo;
// list.append(newLi);
// all.push(newLi);
// input.value = "";
// })

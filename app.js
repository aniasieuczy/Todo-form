const form = document.querySelector("#newTodoForm");
const input = document.querySelector("#newTodoInput");
const list = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const newTodo = input.value;

    if(!newTodo) {
        console.log("Add a new task");
        return;
    }
    const element = document.createElement("div");
    element.classList.add("list");
   
    const content = document.createElement("div");
    // content.innerText = newTodo;
    element.appendChild(content);


    const newInput = document.createElement("input");
    newInput.value = newTodo;
    newInput.setAttribute("readOnly", "readonly");+


    content.appendChild(newInput);

    const actionsContainer = document.createElement('div');
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    editBtn.classList.add("delete");
    actionsContainer.appendChild(editBtn);
    actionsContainer.appendChild(deleteBtn);
    element.appendChild(actionsContainer);
    
    list.appendChild(element);
    input.value = "";

    editBtn.addEventListener("click", function(e) {
        if(editBtn.innerText.toLowerCase() == "edit") {
            newInput.removeAttribute("readonly");
            newInput.focus();
            editBtn.innerText = "Save";
        } else {
            newInput.setAttribute("readOnly", "readOnly");
            editBtn.innerText = "Edit";
        }
    });

    deleteBtn.addEventListener("click", function(e) {
        element.remove();
    });

    newInput.addEventListener("click", () => {
        newInput.classList.toggle("completedTask");
    })
})








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




// let inpEl = document.querySelectorAll(".todo-app")[0];
// let pEl = document.querySelectorAll(".para");
// let arry = [];
// function add(){
//     let form1 = inpEl.value;
//     arry.push(form1);
//     printAllTodos();
//     inpEl.value = "";
// }
// function printAllTodos(){
//     pEl[0].innerHTML = "";
//     for (let i = 0; i < arry.length; i++){
//         pEl[0].innerHTML += `
//         <p id="todo-${i}">
//         ${arry[i]}
//         <button onclick="deleteTodo(${i})">delete</button>
//         <button onclick="editTodo(${i})">Edit</button>
//         </p>`;
//     }
// }

// function deleteTodo(index) {
//     arry.splice(index, 1);
//     printAllTodos();
// }

// let addTodoDiv = document.querySelectorAll("#add-todo-container")[0];
// let editTodoDiv = document.querySelectorAll("#edit-todo-container")[0]
// let editInput = document.querySelectorAll(".edit-todo-input")[0];
// let editIndex;
// function editTodo(index){
//     if (isEditing){
//         displayError()
//     }
//     else{
//     toggleTodoInput()
//     editInput.value = arry[index];
//     editIndex = index;
//     }
// }


// function updateTodo(){
//     toggleTodoInput();
//     arry.splice(editIndex, 1, editInput.value);
//     printAllTodos()
// }


// let isEditing = false;
// function toggleTodoInput(){
//     if(isEditing){
//         addTodoDiv.className = "";
//         editTodoDiv.className = "hide";
//     }
//     else{
//         addTodoDiv.className = "hide";
//         editTodoDiv.className = "";
//     }
//     isEditing = !isEditing;
// }

// let erorrEl = document.querySelectorAll(".error-msg")[0];
// function displayError(){
//     erorrEl.innerHTML = 'Please save current todo first.';
//     setTimeout( function (){
//         erorrEl.innerHTML = "";
//     }, 3000);
// }







let todoApp = document.querySelectorAll(".todo-app")[0];
let divEl = document.querySelectorAll(".para")[0];
function add(){
    let form1 = todoApp.value;
    printAllTodos(form1)
    todoApp.value = "";
}


function printAllTodos(textNode){
    let newTodoItem = makeTodoEl(textNode)
    divEl.appendChild(newTodoItem);
}


function makeTodoEl(newTodoText){
    let pEl = document.createElement("P");
    let createText = document.createTextNode(newTodoText);
    pEl.appendChild(createText);

    let detBtn = document.createElement("Button");
    let detTextNode = document.createTextNode("Delete");
    detBtn.appendChild(detTextNode);
    detBtn.setAttribute("onclick", "deleteTodo(this)");
    pEl.appendChild(detBtn);

    let edtBtn = document.createElement("Button");
    let edtTextNode = document.createTextNode("Edit");
    edtBtn.appendChild(edtTextNode);
    edtBtn.setAttribute("onclick", "editTodo(this)");
    pEl.appendChild(edtBtn);
    return pEl;
}

function deleteTodo(el){
    let targerNode = el.parentNode;
    divEl.removeChild(targerNode);
}

let todoInputContainer = document.querySelectorAll("#add-todo-container")[0];
let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
let editForm = document.querySelectorAll(".edit-todo-input")[0];
let editValue;
function editTodo(el){
    if (isEditing){
        displayError()
    }
    else{
    editValue = el.parentNode.childNodes[0];
    editForm.value = editValue.nodeValue;
    toggleTodoInput()
    }

}

function updateTodo(){
    editValue.nodeValue = editForm.value;
    toggleTodoInput()
}

let isEditing = false;
function toggleTodoInput(){
    if (isEditing){
        todoInputContainer.className = "";
     editTodoContainer.className += " hide";
    }
    else{
        todoInputContainer.className += " hide";
        editTodoContainer.className = "";
    }
    isEditing = !isEditing;
}


let erorrEl = document.querySelectorAll(".error-msg")[0];
function displayError(){
    erorrEl.innerHTML = "Please save old massage then edit new";
    setTimeout(function (){
        erorrEl.innerHTML = "";
    }, 3000)
}
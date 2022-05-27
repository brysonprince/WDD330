import Todo from "./ToDos.js";

function createToDo(toDo) {
    const listItem = document.createElement("li");

    listItem.innerHTML = `<label class="container" data-id="${toDo.id}">${toDo.content}<input type="checkbox"><span class="checkmark"></span><button class="button">X</button></label>`;

    return listItem;
}

function addTask(event) {
    const input = document.forms['addItem']['newToDo'];

    let toDo = new Todo();
    toDo.addToDo(input.value);

    let list = document.getElementById("toDoList");
    list.appendChild(createToDo(toDo));

    event.preventDefault();
}

function display(toDoList) {
    document.getElementById('toDoList').innerHTML = toDoList;
    console.log(toDoList);
}


export {createToDo, addTask, display}
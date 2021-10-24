import { getList, saveList } from "./ls.js";
import { createToDo, addTask } from "./utilities.js";
import Todo from "./ToDos.js";

let toDoList = [];

if (getList()) {
    toDoList = getList();
}

let toDo = new Todo();

document.addEventListener("submit", (e) => {
    toDo.content = addTask();
})

let list = document.getElementById("toDoList");
list.appendChild(createToDo(toDo));

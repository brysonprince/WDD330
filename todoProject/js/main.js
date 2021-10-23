import { getList, saveList } from "./ls.js";
import { createToDo } from "./utilities.js";
import Todo from "./ToDos.js";

let toDoList = [];

if (getList()) {
    toDoList = getList();
}

let toDo = new Todo("Pick up groceries");
toDoList.push(toDo);

let list = document.getElementById("toDoList");
list.appendChild(createToDo(toDo));

const check = document.getElementById("eggs");
console.log(check.checked)

saveList(toDoList);
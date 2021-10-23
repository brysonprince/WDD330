import { getList, saveList } from "./ls";
import { createToDo } from "./utilities";
import Todo from "./ToDos";

let toDoList = [];

if (getList()) {
    toDoList = getList();
}

let toDo = new Todo("Pick up groceries");
toDoList.push(toDo);

list = document.getElementById("toDoList")
list.appendChild(createToDo(toDo));

saveList(toDoList);
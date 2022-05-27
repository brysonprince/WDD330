import { getList, saveList } from "./ls.js";
import { createToDo, addTask, display } from "./utilities.js";

const toDoList = getList();
display(toDoList);

const form = document.forms['addItem'];

form.addEventListener("submit", addTask, false);
form.addEventListener('submit', saveList(document.getElementById("toDoList").innerHTML), false);


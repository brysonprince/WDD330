function getList() {
    let toDoList = [];
    if (localStorage.getItem("toDoList")) {
        toDoList = JSON.parse(localStorage.getItem("toDoList"));
    }
    return toDoList;
}

function saveList(toDoList) {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

export {getList, saveList};
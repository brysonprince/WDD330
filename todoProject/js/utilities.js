function createToDo(toDo) {
    const listItem = document.createElement("li");

    listItem.innerHTML = `<label class="container" data-id="${toDo.id}">${toDo.content}<input type="checkbox"><span class="checkmark"></span><button class="button">X</button></label>`;

    return listItem;
}

function addTask() {
    const form = document.getElementById("addItem")
    return form.elements[0];
}

export {createToDo, addTask}
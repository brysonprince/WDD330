function createToDo(toDo) {
    listItem = document.createElement("li");

    listItem.innerHTML = `<label class="container">${toDo}<input type="checkbox"><span class="checkmark"></span><button class="button">X</button></label>`;

    return listItem;
}

export {createToDo}
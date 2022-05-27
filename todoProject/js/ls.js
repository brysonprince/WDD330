function getList() {
    let toDoList = [];
    if(!localStorage.getItem('toDoList')){
        toDoList = '<li><label class="container">Get Eggs<input type="checkbox" id="eggs"><span class="checkmark"></span><button class="button">X</button></label></li><li><label class="container">Pickup Dry Cleaning<input type="checkbox" id="dryCleaning"><span class="checkmark"></span><button class="button">X</button></label></li><li><label class="container">Get Gas<input type="checkbox" id="gas"><span class="checkmark"></span><button class="button">X</button></label></li>';
    }
    else{
        toDoList = JSON.parse(localStorage.getItem('toDoList'));
    }
    console.log(toDoList);
    return toDoList;  
}

function saveList(toDoList) {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

export {getList, saveList};
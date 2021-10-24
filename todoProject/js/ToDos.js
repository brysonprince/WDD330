export default class toDo {
    constructor() {
        this.id = Date.now();
        this.content = "";
        this.completed = false;
    }

    addToDo(content) {
        this.content = content;
    }
}
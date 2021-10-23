export default class toDos {
    constructor(content) {
        this.id = Date.now();
        this.content = content;
        this.completed = false;
    }
}
export default class toDos {
    constructor(content) {
        this.Id = Date.now();
        this.Content = content;
        this.completed = false;
    }
}
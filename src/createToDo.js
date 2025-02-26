export class toDo {
    tasks = [];
    constructor(title, description,due,priority) {
        this.title =  title;
        this.description = description;
        this.due = due;
        this.priority = priority; 
    }

    createToDo() {
        let toDO = (this.title + ', ' + this.description + ', ' + this.due + ', ' + this.priority + ', ');
        console.log(toDO);
        return;
    };
}


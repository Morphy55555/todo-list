import { toDo } from "./createToDo.js";
const getToDoAddBtn = document.querySelector('.addToDo');
const getCancelBtn = document.querySelector('.cancelBtn');
const getToDoForm = document.querySelector('.toDoForm');
const getContent = document.querySelector('.content');
const getTasks = document.querySelector('.tasks');




window.tasks = [];
window.completed = [];
// let campaigns = [];
// let quests = [];


//Hide the form then Display until the '+ add task' is clicked
getToDoForm.style.display = 'none';
getToDoAddBtn.addEventListener('click', () => {
    console.log('clicked');
    getToDoForm.style.display = 'block';
    getToDoAddBtn.style.display = 'none';
});

getCancelBtn.addEventListener('click', () => {
    getToDoForm.style.display = 'none';
    getToDoAddBtn.style.display = 'block';
});


//go through the objectives array that stores the form data and display them
function displayObjective(array) {
    let displayCheckbox = document.createElement('input');
    let displayTitle = document.createElement('span');
    let displayDescription = document.createElement('span');
    let displayDue = document.createElement('span');
    let displayPriority = document.createElement('span');
    for (window.i = 0; i < tasks.length; i ++) {
        
        displayTitle.textContent = array[i].title;
        displayDescription.textContent += array[i].description;        
        displayDue.textContent += array[i].due;

        displayCheckbox.setAttribute('data-index', tasks.length);
        displayTitle.setAttribute('data-index', tasks.length);
        displayDescription.setAttribute('data-index', tasks.length);
        displayDue.setAttribute('data-index', tasks.length);    
        displayPriority.setAttribute('data-index', tasks.length);
    };
    
    displayCheckbox.type = 'checkbox';
    displayCheckbox.classList.add(`checkbox`);
    displayTitle.classList.add(`title`);
    displayDescription.classList.add(`description`)
    displayDue.classList.add(`due`);
    displayPriority.classList.add(`priority`);

   

    getTasks.appendChild(displayCheckbox);
    getTasks.appendChild(displayTitle);
    getTasks.appendChild(displayDescription);
    getTasks.appendChild(displayDue);
    getTasks.appendChild(displayPriority);
    
    //Add event listener to the checkbox to remove the task from the tasks array and display it in the completed section
    let checkbox = document.querySelectorAll('.checkbox');
    //Get node list ^
    //Add event listener to each checkbox
    checkbox.forEach(element => {
        element.addEventListener('click',(e)=> {
            //Check if checkbox is checked
            let isChecked = e.target.checked;
            //Get the index of the checkbox
            let index = e.target.getAttribute('data-index');
            console.log(index);
            //If checkbox is checked, push the task to the completed array and remove it from the tasks array
            if (isChecked) {
            completed.push(array[index-1]);
            array.splice(index-1, 1);
            //Remove the task from the display
            let nodelist = document.querySelectorAll(`[data-index="${index}"]`);
            nodelist.forEach(element => {
                element.remove();
            });

        }
        });
    });

};

//On form sumbit event, get the values of each input field, create a new toDo object, push it to the objectives array and display it
getToDoForm.addEventListener("submit",  (event) => {
    event.preventDefault();
    let titleInput = document.querySelector("#title").value;
    let descriptionInput = document.querySelector("#description").value;
    let dueInput = document.querySelector("#due").value;
    let priotiyInput = document.querySelector("#priority").value;
    let task =  new toDo(titleInput,descriptionInput,dueInput,priotiyInput);
    task.createToDo();
    tasks.push(task);
    displayObjective(tasks);
    getToDoForm.reset();
});


const objective1 = new toDo('do stuff', 'description of doing stuff', 'now', 'urgent', 'stuff about stuff');
objective1.createToDo();



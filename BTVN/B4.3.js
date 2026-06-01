
let tasks = [
    { id: 1, title: "Code projects", completed: false },
    { id: 2, title: "Do homework", completed: false }
];


const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


function renderTasks() {
    taskList.innerHTML = ""; 

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];

 
        let li = document.createElement("li");
        li.textContent = task.title + " ";


        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = function() {
            let newTitle = prompt("Sửa tên công việc:", task.title);
            if (newTitle !== null && newTitle.trim() !== "") {
                task.title = newTitle; 
                renderTasks();         
            }
        };


        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            tasks.splice(i, 1); 
            renderTasks();      
        };


        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
}


addBtn.onclick = function() {
    let titleText = taskInput.value.trim();
    
    if (titleText === "") {
        alert("Vui lòng nhập tên công việc!");
        return;
    }


    let newTask = {
        id: Date.now(), 
        title: titleText,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ""; 
    renderTasks();        
};


renderTasks();
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const tasks=JSON.parse(localStorage.getItem("tasks")) || [];


/* Add Task Function------------------------------------------- */
function addTask(){
  const taskText=taskInput.value.trim();
  if(taskText === "") return;

  const task = {text:taskText};
  tasks.push(task);

  localStorage.setItem("tasks",JSON.stringify(tasks));

  taskInput.value = "";
  displayTasks();
}


/* Delete Task Function------------------------------------------- */
function deleteTask(index){
  tasks.splice(index,1);

  localStorage.setItem("tasks",JSON.stringify(tasks));

  displayTasks();
}


/* Edit Task Function------------------------------------------- */
function editTask(index){
  const newTaskText = prompt("Edit the Task: ",tasks[index].text);

  if(newTaskText !== null){
  
  tasks[index].text = newTaskText;

  localStorage.setItem("tasks",JSON.stringify(tasks));

  displayTasks();
  }
}


/* Display Task Function------------------------------------------- */
function displayTasks(){
  taskList.innerHTML = "";

  tasks.forEach((task,index)=>{
    const li = document.createElement("li");
    li.innerHTML=`
    <span>${task.text}</span>
    <hr>
    <button class="edit-button" onclick="editTask(${index})">Edit</button>
    <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });

}
displayTasks();
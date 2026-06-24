const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};


const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) => {
        tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `
    }
  );
};

if (taskData.length){
    updateTaskContainer()
}

openTaskFormBtn.addEventListener("click", ()=>{
    taskForm.classList.toggle("hidden")
})

/* input values shouldn't retain their values so we make this function, alongside with 
toggling classList("hidden") and resetting currentTask whenver new tasks are made */

function reset(){
  addOrUpdateTaskBtn.innerText = "Add Task"
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};

}


function editTask(buttonEl) {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");  
}


function deleteTask(buttonEl) {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);

  /* splice already does the work so there is no need in localStorage.removeItem()
  all that is needed is to save taskData to local Storage oncmeore*/
  
  localStorage.setItem("data", JSON.stringify(taskData))
}


closeTaskFormBtn.addEventListener("click", ()=>{
    if (titleInput.value || dateInput.value || descriptionInput.value){
        confirmCloseDialog.showModal()
    }
    else{
        reset()
    }
})

discardBtn.addEventListener("click", ()=>{
    if (confirm("Are you sure? This is Permanant")){
        confirmCloseDialog.close()
        reset()
    }
})

function removeSpecialCharacters(input) {
  return input.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}

taskForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    if (!titleInput.value.trim()){
        alert("To-do's cannot be only spaces")
        return
    }
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id)

    const taskObject = {
        id: removeSpecialCharacters(`${titleInput.value}-${Date.now()}`),
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObject);
  }
    else {
        taskData[dataArrIndex] = taskObject;
  }

    updateTaskContainer()
    localStorage.setItem("data", JSON.stringify(taskData))
    reset()
})



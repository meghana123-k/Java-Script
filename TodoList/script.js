let tasks = [];
let currentFilter = "all";
let searchQuery = "";

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const prioritySelect = document.querySelector("#priority-select");
const taskList = document.querySelector("#task-list");
const searchInput = document.querySelector("#search-input");
const filterButtons = document.querySelector(".filter-buttons");
const summarycounters = document.querySelector("#summary");

taskForm.addEventListener("submit", addTask);
filterButtons.addEventListener("click", changeFilter);
searchInput.addEventListener("input", updateSearchQuery);
taskList.addEventListener("click", handleTaskAction);


function addTask(e) {
  e.preventDefault();
  const value = taskInput.value.trim();
  if (!value) {
    alert("Task must not be empty");
    return;
  }
  const task = {};
  task.id = Date.now();
  task.title = value;
  task.priority = prioritySelect.value;
  task.completed = false;
  task.createdAt = Date.now();
  tasks.push(task);
  console.log(tasks);

  taskInput.value = "";
  saveToLocalStorage();
  render();
}
function changeFilter(e) {
  if (!e.target.dataset.filter) return;
  currentFilter = e.target.dataset.filter;
  render();
}
function updateSearchQuery(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  render();
}
function render() {
  taskList.innerHTML = "";
  let filtered = applyFilter(tasks);
  let searched = applySearch(filtered);

  searched.forEach((task) => {
    let li = document.createElement("li");
    li.dataset.id = task.id
    li.className = `task-group-list ${task.priority}-priority ${
      task.completed ? "completed" : ""
    }`;
    li.innerHTML = `<span>${task.title}</span>
                    <button class="complete-btn">Complete</button>
                    <button class="delete-btn">Delete</button>`;

    taskList.appendChild(li);
  });
  let total = tasks.length;
  let completed = completedCount();
  let pending = total - completed;
  summarycounters.innerHTML = `
  <p>Total: <span id="total-count">${total}</span></p>
        <p>Completed: <span id="completed-count">${completed}</span></p>
        <p>Pending: <span id="pending-count">${pending}</span></p>
  `;
}
function applyFilter(tasks) {
  let filtered = [];
  if (currentFilter === "completed") {
    filtered = tasks.filter((task) => {
      return task.completed;
    });
  } else if (currentFilter === "pending") {
    filtered = tasks.filter((task) => {
      return !task.completed;
    });
  } else if (currentFilter === "high") {
    filtered = tasks.filter((task) => {
      return task.priority === "high";
    });
  } else {
    return tasks;
  }
  return filtered;
}
function applySearch(tasks) {
  return tasks.filter((task) => task.title.toLowerCase().includes(searchQuery));
}
function handleTaskAction(e) {
  if(e.target.classList.contains('complete-btn')) {
    handleComplete(e);
  } else if(e.target.classList.contains('delete-btn')) {
    handleDelete(e);
  }
  return;

}
function handleComplete(e) {
  
  const li = e.target.closest('li')
  const id = Number(li.dataset.id);
  tasks.forEach(task => {
    if(task.id === id) {
      task.completed = !task.completed;
    }
  })
  saveToLocalStorage();
  render();
}
function handleDelete(e) {
  const li = e.target.closest('li')
  const id = Number(li.dataset.id);
  tasks = tasks.filter(task => task.id !== id)
  saveToLocalStorage();
  render();
}
function completedCount() {
  return tasks.filter((t) => t.completed).length;
}
function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}
loadFromLocalStorage();
render();


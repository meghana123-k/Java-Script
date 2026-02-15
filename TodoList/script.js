tasks = [];
currentFilter = "all";
searchQuery = "";

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const prioritySelect = document.querySelector("#priority-select");
const taskList = document.querySelector("#task-list");
const searchInput = document.querySelector("#search-input");
const filterButtons = document.querySelector(".filter-buttons");
const summarycounters = document.querySelector("#summary");

taskForm.addEventListener("submit", addTask);
filterButtons.addEventListener("click", changeFilter);
// searchInput.addEventListener('search', updateSearchQuery);
// taskList.addEventListener('click', handleComplete)
let counter = 0;
function addTask(e) {
  e.preventDefault();
  const value = taskInput.value.trim();
  if (!value) {
    alert("Task must not be empty");
    return;
  }
  const task = {};
  task.id = counter;
  task.title = value;
  task.priority = prioritySelect.value;
  task.completed = false;
  task.createdAt = Date.now();
  tasks.push(task);
  console.log(tasks);

  taskInput.value = "";
  render();
}
function render() {
  taskList.innerHTML = "";
  let filtered = changeFilter();
//   let serachQuery = updateSearchQuery();
}
function changeFilter(e) {
  e.preventDefault();
  let target = e.target.value.toLowerCase();
  if (target === "completed") {
    Arrays.from(tasks).forEach((task) => {
      if (task.completed) {
        taskList.style.display = "flex";
      } else {
        taskList.style.display = "none";
      }
    });
  } else if (target === "pending") {
    tasks.forEach((task) => {
      if (task.completed) {
        taskList.style.display = "none";
    } else {
        taskList.style.display = "flex";
    }
});
} else if (target === "high priority") {
    tasks.forEach((task) => {
        if(task.priority === "high") {
            taskList.style.display = "flex";
        } else {
            taskList.style.display = "none";
        }
    });
  }
}

const todoList = [
  {
    name: "make dinner",
    dueDate: "22-06-2025",
  },
  {
    name: "wash utensils",
    dueDate: "24-06-2025",
  },
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
            <button onclick = "
            todoList.splice(${i}, 1)
            renderTodoList();
            " class = "delete-todo-button">Delete</button>
      
          `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addItems() {
  const inputElement = document.querySelector(".js-todo-name");
  const inputDueDate = document.querySelector(".js-todo-dueDate");

  const name = inputElement.value;
  const dueDate = inputDueDate.value;
  todoList.push({ name, dueDate });
  inputElement.value = "";
  inputDueDate.value = "";
  renderTodoList();
}

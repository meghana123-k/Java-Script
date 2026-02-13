const todoList = [
  {
    name: "make dinner",
    dueDate: "2025-06-22",
  },
  {
    name: "wash utensils",
    dueDate: "2025-06-24",
  },
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
          <div>${name}</div>
          <div>${dueDate}</div>
            <button class = "delete-todo-button js-delete-todo-button">Delete</button>
      
          `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
document
  .querySelectorAll(".js-delete-todo-button")
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addItems();
});

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

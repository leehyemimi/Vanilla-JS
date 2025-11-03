const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const toDos = [];

function saveTodo(toDos){
  localStorage.setItem("todos", toDos);
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li); //ul;
}
function handleTodoFormSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  saveTodo(toDos);
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoFormSubmit);
const todos = [];

function addTodo() {
  // get the text the user type
  const inputElem = document.getElementById('todoInput');
  const todoText = inputElem.value;

  // get the parent list element and add a new list item element with the text
  const todoObj = { text: todoText, createdAt: new Date() };
  todos.push(todoObj);

  // reset form
  inputElem.value = '';

  // render todo on UI
  displayTodos();
}

function displayTodos() {
  const listElem = document.getElementById('todoList');
  listElem.innerHTML = '';

  todos.forEach((todo) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${todo.text} - Created At: ${todo.createdAt.toDateString()}`;
    listElem.appendChild(listItem);
  });
}

displayTodos();

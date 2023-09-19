//These lines get references to the HTML elements that we will be using in our app:
//the form element, the input element, and the list element.
const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

//This code checks to see if there is a list of tasks stored in localStorage.
//If there is, it gets the list and then calls the toDoList() function on each task in the list. This will create a
//new list item for each task.
let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

//This code adds an event listener to the form element. When the user submits the form, the toDoList()
//function will be called. This will create a new list item for the task that the user entered into the input field.
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

//The toDoList() function takes a task object as input. If a task object is not provided, then the function creates a
//new task object with the value of the input element.
function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

//The function then creates a new list item element and sets its text to the task name. The function also adds two
//buttons to the list item element: a check button and a trash button.
  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-check-square">
  `;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
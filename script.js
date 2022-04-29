// You can access the 'data' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems);

// Use the 'data' variable to create the appropriate elements and append them onto
// the page.

// const incompleteTasks = document.querySelector("#incomplete-items");
// incompleteTasks.classList.add("form-check");
// const completeTasks = document.querySelector("#complete-items");
// completeTasks.classList.add("form-check");

// for (let items of todoItems) {
//   const incompleteItems = document.createElement("li");
//   const completeItems = document.createElement("li");
//   incompleteItems.classList.add("list-group-item");
//   incompleteItems.classList.add("form-check-label");
//   completeItems.classList.add("list-group-item");
//   completeItems.classList.add("form-check-label");
//   if (items.completed == true) {
//     completeItems.innerText = items.title;
//     completeTasks.appendChild(completeItems);
//   } else {
//     incompleteItems.innerText = items.title;
//     incompleteTasks.appendChild(incompleteItems);
//   }
// }
i = 7;
// incompleteItems.innerText = items;
// incompleteTasks.appendChild(incompleteItems);
const userInput = document.querySelector(".form-control");
const todoForm = document.querySelector("#todoForm");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newObject = {
    id: [i],
    title: userInput.value,
    completed: false,
  };
  todoItems.push(newObject);
  i++;
  console.log(todoItems);
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  label.innerText = newObject.title;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  incompleteItems.appendChild(listItem);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Remove";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
  listItem.classList.add("list-group-item");
  label.classList.add("form-check-label", "ps-3");
});

const incompleteItems = document.querySelector("#incomplete-items");
const completeItems = document.querySelector("#complete-items");

for (let item of todoItems) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");
  listItem.appendChild(checkbox);
  const label = document.createElement("label");
  label.innerText = item.title;
  label.classList.add("form-check-label", "ps-3");
  listItem.appendChild(label);
  if (item.completed) {
    completeItems.appendChild(listItem);
    checkbox.checked = true;
  } else {
    incompleteItems.appendChild(listItem);
  }
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Remove";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
}

//moving checked items to the Complete List
// for (item of incompleteItems) {
//   if (checkbox.checked) {
//     item.completed;
//   }
// }

//adding user input to the ToDo list
// const userInput = document.querySelector(".form-control");
// const todoForm = document.querySelector("#todoForm");
// todoForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const newObject = {
//     id: [i],
//     title: userInput.value,
//     completed: false,
//   };
//   todoItems.push(newObject);
//   i++;
//   location.reload();
// }
console.log(todoItems);

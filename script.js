// You can access the 'data' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems);

// Use the 'data' variable to create the appropriate elements and append them onto
// the page.

const incompleteTasks = document.querySelector("#incomplete-items");
incompleteTasks.classList.add("form-check");
const completeTasks = document.querySelector("#complete-items");
completeTasks.classList.add("form-check");

for (let items of todoItems) {
  const incompleteItems = document.createElement("li");
  const completeItems = document.createElement("li");
  incompleteItems.classList.add("list-group-item");
  incompleteItems.classList.add("form-check-label");
  completeItems.classList.add("list-group-item");
  completeItems.classList.add("form-check-label");
  if (items.completed == true) {
    completeItems.innerText = items.title;
    completeTasks.appendChild(completeItems);
  } else {
    incompleteItems.innerText = items.title;
    incompleteTasks.appendChild(incompleteItems);
  }
}

// incompleteItems.innerText = items;
// incompleteTasks.appendChild(incompleteItems);

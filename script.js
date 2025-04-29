let currentIndex = 3;
function addTodo() {
  const inputEl = document.getElementById("inp"); // Get the input element where the user types the todo text.
  const textNode = document.createElement("div"); // Create a new div element to hold the todo item.

  // Set the innerHTML of the new div. It includes:
  // - A div with a unique id based on the current index.
  // - An h4 element to display the todo text entered by the user.
  // - A button to delete the todo item, which calls the deleteTodo function with the current index.
  textNode.innerHTML = 
    "<div id='todo-" + currentIndex + "'>" + 
    "<h4>" + inputEl.value + "</h4>" + 
    "<button onclick=\"deleteTodo(" + currentIndex + ")\">Delete</button>" + 
    "</div>";

  const parentEl = document.getElementById("todos"); // Get the parent element where all todos are displayed.
  parentEl.appendChild(textNode); // Append the newly created todo item to the parent element.

  currentIndex = currentIndex + 1; // Increment the index for the next todo item.
}

function deleteTodo(index) {
  const element = document.getElementById("todo-" + index); // Find the todo item by its unique id.
  element.parentNode.removeChild(element); // Remove the todo item from its parent element.
}
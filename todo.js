

// const addButton = document.getElementById("add-button");
// const todoInput = document.getElementById("todo-input");
// const todoList = document.getElementById("todo-list");

// // Function to add a task
// function addTask() {
//   const taskText = todoInput.value; // Get the text from the input box

//   if (taskText === "") { // Check if it's empty
//     alert("Please enter a task!");
//     return;
//   }

//   // Create a new list item
//   const listItem = document.createElement("li");
//   listItem.textContent = taskText;

//   // Create a delete button
//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";

//   // When the delete button is clicked, remove the task
//   deleteButton.addEventListener("click", function () {
//     todoList.removeChild(listItem);
//   });

//   // Add the button to the list item
//   listItem.appendChild(deleteButton);

//   // Add the list item to the to-do list
//   todoList.appendChild(listItem);

//   // Clear the input box
//   todoInput.value = "";
// }

// // Add a task when the button is clicked
// addButton.addEventListener("click", addTask);

// // Add a task when the Enter key is pressed
// todoInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });





let addButton = document.getElementById("add-button");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

function addTask() {
  addButton.addEventListener("click", function () {


    let taskText = todoInput.value;
    if (taskText === "") {
      alert("Please enter a valid task");
      return;

    }
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete"

    todoList.appendChild(listItem);
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      todoList.removeChild(listItem);
    });

    todoInput.value = "";
  });
}

addTask();

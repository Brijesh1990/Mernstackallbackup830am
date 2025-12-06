// create a function for blank input
function addTask() {
  var taskInput = document.getElementById('taskInput').value;
  // Check if the input is empty
  if (taskInput.trim() === '') {
    alert('Please enter a task.');
    // focus the input field
    document.getElementById('taskInput').focus();
    return false;
  }

  // Create a new list item and add it to the task list
  var taskList = document.getElementById('taskList');
  if (!taskList) {
    console.error('Task list element not found');
    return;
  }
  //   create a new list item
  var newTask = document.createElement('li');
  // Set the text content of the new list item to the input value
  newTask.textContent = taskInput;
  // Append the new list item to the task list
  taskList.appendChild(newTask);
  // Clear the input field after adding the task
  document.getElementById('taskInput').value = '';
  //   Append the delete button to the new task
  newTask.appendChild(deleteButton);
  // Focus the input field for the next task
  document.getElementById('taskInput').focus();
  return true;
}

// create a buttn in list for delete task
// Create a button element
var deleteButton = document.createElement('button');
// Set the button inside of taskList
deleteButton.textContent = 'X';
deleteButton.className = 'delete-button';

// Add an event listener to the button to delete the task when clicked
deleteButton.addEventListener('click', function (event) {
  // Prevent the event from bubbling up to the list item
  event.stopPropagation();
  // Remove the task from the list
  var taskItem = event.target.parentNode; // Get the parent list item
  if (taskItem) {
    taskItem.parentNode.removeChild(taskItem); // Remove the list item
  }
});

// Function to delete the last task
function deleteTask() {
  var taskList = document.getElementById('taskList');
  if (!taskList || taskList.children.length === 0) {
    alert('No tasks to delete.');
    return;
  }
  // Remove the last task from the list
  taskList.removeChild(taskList.lastChild);
}

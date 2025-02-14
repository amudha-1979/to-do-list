// Select elements from the DOM
const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

// Add task when the button is clicked
addTaskButton.addEventListener('click', function() {
    const newTask = newTaskInput.value.trim();

    if (newTask !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;
        todoList.appendChild(listItem);

        // Clear the input field after adding the task
        newTaskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Optional: Add task when pressing the Enter key
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});

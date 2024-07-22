
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const prioritySelect = document.getElementById('priority');
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = { text: taskText, priority: priority };
    saveTask(task);

    taskInput.value = '';
    prioritySelect.value = 'low';
    renderTasks();
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function loadTasks() {
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    const tasks = getTasks();
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.priority;
        li.innerHTML = `
            ${task.text}
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function editTask(index) {
    const tasks = getTasks();
    const task = tasks[index];

    const newTaskText = prompt("Edit task:", task.text);
    if (newTaskText !== null && newTaskText.trim() !== "") {
        task.text = newTaskText.trim();
        tasks[index] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

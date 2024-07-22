document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearCompletedButton = document.getElementById('clearCompletedButton');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    clearCompletedButton.addEventListener('click', clearCompletedTasks);

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'task-complete-btn';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(completeButton);
        taskList.appendChild(li);
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('#taskList li.completed');
        completedTasks.forEach(task => task.remove());
    }
});

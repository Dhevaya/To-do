// Minimal To-Do List logic
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


function createTaskElement(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    checkbox.onchange = () => {
        span.classList.toggle('completed', checkbox.checked);
    };

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = '\u2715';
    delBtn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    return li;
}

addBtn.onclick = () => {
    const value = taskInput.value.trim();
    if (value) {
        taskList.appendChild(createTaskElement(value));
        taskInput.value = '';
        taskInput.focus();
    }
};

taskInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') addBtn.click();
});

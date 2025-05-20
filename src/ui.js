export function renderTasks(tasks) {
  const list = document.getElementById('task-list');
  list.innerHTML = ''; // clear
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
        ${task.description}
      </span>
      <div>
        <button class="toggle-btn">${task.completed ? 'Undo' : 'Done'}</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>`;
    list.appendChild(li);
  });
}

export function getTaskInput() {
  return document.getElementById('task-input').value.trim();
}

export function clearTaskInput() {
  document.getElementById('task-input').value = '';
}

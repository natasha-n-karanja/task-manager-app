import Task from './task.js';
import { renderTasks, getTaskInput, clearTaskInput } from './ui.js';
import { saveTasks, loadTasks } from './storage.js';
import { fetchTasks, addTaskToAPI } from './api.js';

let tasks = [];

async function init() {
  tasks = loadTasks();
  renderTasks(tasks);
}

document.getElementById('task-form').addEventListener('submit', async e => {
  e.preventDefault();
  const desc = getTaskInput();
  if (!desc) return;
  const newTask = new Task(Date.now(), desc);
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);
  clearTaskInput();
});

document.getElementById('task-list').addEventListener('click', e => {
  const id = Number(e.target.closest('li').dataset.id);
  if (e.target.classList.contains('toggle-btn')) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  }
  if (e.target.classList.contains('delete-btn')) {
    tasks = tasks.filter(t => t.id !== id);
  }
 
  saveTasks(tasks);
  renderTasks(tasks);
});

init();

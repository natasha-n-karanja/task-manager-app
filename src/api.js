const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTasks() {
  const res = await fetch(BASE_URL + '?_limit=5');
  return await res.json();
}

export async function addTaskToAPI(task) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
  return await res.json();
}
import Task from '../task.js';

test('creates task with correct properties', () => {
  const t = new Task(1, 'Test');
  expect(t.id).toBe(1);
  expect(t.description).toBe('Test');
  expect(t.completed).toBe(false);
});
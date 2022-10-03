import { client, checkError } from './client';

export async function fetchToDo() {
  const resp = await client
    .from('todos')
    .select('*');
  return checkError(resp);
}

export async function toggleCompleted(id, is_complete) {
  const resp = await client
    .from('todos')
    .update({ is_complete })
    .match('id', id);
  return checkError(resp);
}

export async function createNew(task) {
  const resp = await client
    .from('todos')
    .insert([{ task: task }]);
  return checkError(resp);
}
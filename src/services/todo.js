import { client, checkError } from './client';

export async function fetchToDo() {
  const resp = await client
    .from('todos')
    .select('*');
  return checkError(resp);
}

export async function toggleCompleted(todo) {
  const resp = await client
    .from('todos')
    .update({ complete: true })
    .match({ id : todo.id })
    .single();
  return checkError(resp);
}

export async function createNew(description) {
  const resp = await client
    .from('todos')
    .insert([{ description }])
    .single();
  return checkError(resp);
}
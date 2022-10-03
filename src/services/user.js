import { client, checkError } from './client.js';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signOutUser() {
  const resp = await client.auth.signOut();
  return checkError(resp);
}

import { useEffect, useState } from 'react';
import { fetchToDo } from '../services/todo';

export function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchToDo();
      setTodos(data);
    };
    loadData();
  }, []);

  return { todos, setTodos };
}
import { useEffect, useState } from 'react';
import { fetchToDo } from '../services/todo';

export function useTodo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchToDo();
      setTodos(data);
      setLoading(false);
    };
    loadData();
  }, []);

  return { todos, setTodos, loading };
}
import './TodoList.css'; 
import { React, useEffect, useState } from 'react';
import { fetchToDo, toggleCompleted } from '../../services/todo';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect (() => {
    const fetchData = async () => {
      const resp = await fetchToDo();
      setTasks(resp);
    };
    fetchData();
  }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };

  const handleClick = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);
  
    setTasks((prevState) => 
      prevState.map((todo) =>
        todo.id === task.id ? { ...task, is_complete: !task.is_complete } : todo
      )
    );
  };
  return (
    <>
      <h3>My To Do List</h3>
      <ul className="todo-list">
        {tasks.map((task) => {
          <li key={task.id}>
            <input
              checked={task.is_complete}
              type="checkbox"
              onChange={() => handleClick(task)}
            ></input>
            {task.task}
          </li>;
        })}
      </ul>
    </>
  );
}
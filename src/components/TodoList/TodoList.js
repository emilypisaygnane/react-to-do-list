import './TodoList.css'; 
import { React, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { createNew, toggleCompleted } from '../../services/todo';
import { useTodo } from '../../Hooks/useTodo';

export default function TodoList() {
  const { todos, setTodos } = useTodo();
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  const handleSubmit = async () => {
    const { data } = await createNew(description);
    setTodos(prevState => [...prevState, data]);
    setDescription('');
  };

  const handleComplete = async (todo) => {
    const { data } = await toggleCompleted(todo);
    setTodos(prevState => prevState.map(item => (item.id === data.id ? data : item)));
  };

  return (
    <>
      <div className='todo-form'>
        <input type="text" value={description}
          placeholder="Enter New Task Here"
          onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleSubmit}>Add</button> 
      </div>
      <h3>My To Do List:</h3>
      <ul className="todo-list">
        {todos.map((todo) => {
          <li key={todo.id}>
            <input
              checked={todo.complete}
              type="checkbox"
              onChange={() => handleComplete(todo)} />
            {todo.description}
          </li>;
        }
        )}
      </ul>
    </>
  );
}
import './Home.css';
import { useAuth } from '../../context/UserContext';
import Auth from '../Auth/Auth';
import TodoList from '../TodoList/TodoList';

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <div>
      {!currentUser && <Auth />}
      {currentUser && <TodoList />}
    </div>
  );
}
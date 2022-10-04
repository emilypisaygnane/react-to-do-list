import './Home.css';
import Auth from '../Auth/Auth';
import TodoList from '../TodoList/TodoList';
import { authUser } from '../../services/user';

export default function Home() {
  const { currentUser } = authUser();
  return (
    <div>
      {!currentUser && <Auth />}
      {currentUser && <TodoList />}
    </div>
  );
}
import { signOutUser } from '../../services/user';
import './Header.css';

export default function Header() {
  const { currentUser, setCurrentUser } = useAuth();
  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <header>
      <h2>To Do List</h2>
      {currentUser && (
        <>
          <div>Hello {currentUser.email}</div>
          <div className="link" onClick={handleSignOut}>
            Sign Out
          </div>
        </>
      )}
    </header>
  );
}
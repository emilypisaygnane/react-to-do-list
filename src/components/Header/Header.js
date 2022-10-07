import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { signOut } from '../../services/auth';
import './Header.css';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  
  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  return (
    <>
      <header className='header'>
        <h2>To Do List</h2>
        {user && (
          <>
            <div className='greeting'>Hello {user.email}</div>
            <button onClick={handleSignOut}>
              Sign Out</button>
          </>
        )}
      </header>
    </>
  );
}
import { React, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/user';
import './Auth.css';
import { useAuth } from '../../context/UserContext';

export function Auth() {
  const { setCurrentUser } = useAuth();

  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !password) return;
    try {
      const user = 
          type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(user.email);
    } catch (e) {
      e.message
        ? setErrorMessage(e.message)
        : setErrorMessage('Oopsies, something went wrong.');
    }
  };
  return (
    <div className="auth">
      <div className="tabs">
        <NavLink to="/auth/sign-in" className="link" activeStyle={{ textDecoration: 'underline' }}>Sign In</NavLink>
        <NavLink to="/auth/sign-up" className="link" activeStyle={{ textDecoration: 'underline' }}>Sign Up</NavLink>
      </div>
      <div className="error-message">{errorMessage}</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-controls">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-controls">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Auth;

import { React, useState } from 'react';
import { signInUser, signUpUser } from '../../services/user';
import './Auth.css';
import classNames from 'classnames';
import { useAuth } from '../../context/UserContext';

export function Auth() {
  const { setCurrentUser } = useAuth();

  const [type, setType] = useState('signin');
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
        : setErrorMessage('Oopsies, something went wrong.')
    }
  };
  return (
    <div className="auth">
      <div className="tabs">
        <h3 className={classNames({ active: type === 'signin'})} onClick={() => setType('signin')}>
            Sign In
        </h3>
        <h3 className={classNames({ active: type === 'signup' })} onClick={() => setType('signup')}>
            Sign Up
        </h3>
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

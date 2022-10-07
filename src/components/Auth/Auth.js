import { React, useState, useContext } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { authUser } from '../../services/auth';
import './Auth.css';
import { UserContext } from '../../context/UserContext';

export function Auth() {
  const { user, setUser } = useContext(UserContext);
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log(email, password);
  const clickHandler = async (e) => {
    e.preventDefault();
    const userResp = await authUser(email, password, type);
    setUser(userResp);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/todos" />;
  }

  return (
    <div className="auth">

      <form>
        <div className="tabs">
          <NavLink to="/auth/sign-in" className="link" >Sign In</NavLink>
          <NavLink to="/auth/sign-up" className="link" >Sign Up</NavLink>
        </div>
          
        <div className="form-controls">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-controls">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button onClick={(e) => clickHandler(e)}>Submit</button>
      </form>
    </div>
  );
}

export default Auth;

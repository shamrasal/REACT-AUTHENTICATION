import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Store/Auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctx = useContext(AuthContext)
  const userLoggedIn = ctx.isLoggedIn

  const logoutHandler = () => {
    ctx.logOut()
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!userLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {userLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

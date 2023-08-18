import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Teacherop</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-danger">Logout</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-info">Settings</button>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="btn btn-outline-primary">Login / Signup</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

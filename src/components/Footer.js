import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="col text-right">
            <p>&copy; {new Date().getFullYear()} Teacherop</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

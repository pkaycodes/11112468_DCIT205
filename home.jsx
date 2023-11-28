import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="comScience_logo.png" alt="Computer Science Department Logo" width="300px" height="50px" />
        <nav className="header-nav">
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about_us.html">About Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
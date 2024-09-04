import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navBar = [
    { key: 'pageOne', path: 'pageOne', title: 'One' },
    { key: 'pageTwo', path: 'pageTwo', title: 'Two' },
    { key: 'pageThree', path: 'pageThree', title: 'Three' }
  ];

  return (
    <header className="header">
        <div>Logo</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="nav-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className="nav-list">
          {navBar.map(item => (
            <li key={item.key} className="nav-item" onClick={() => onSelect(item.path)}>
              <NavLink to={`/${item.path}`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

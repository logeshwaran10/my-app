import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Components
import Logo from "../Assets/Logo.svg";
import menu from "../Assets/hamburger.svg";

const Header = ({ active, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navBar = [
    { key: "pageOne", path: "pageOne", title: "One" },
    { key: "pageTwo", path: "pageTwo", title: "Two" },
    { key: "pageThree", path: "pageThree", title: "Three" },
  ];

  return (
    <header className="header">
      <nav className={"nav"}>
        <div className="nav-toggle" onClick={toggleMenu}>
          <img src={menu} />
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
        <ul className={`horizontal`}>
          {navBar.map((item) => (
            <li
              key={item.key}
              className={"nav-item"}
              onClick={() => onSelect(item.path)}
            >
              <NavLink to={`/${item.path}`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <ul className={"veritical"}>
          {navBar.map((item) => (
            <li
              key={item.key}
              className={"nav-item"}
              onClick={() => onSelect(item.path)}
            >
              <NavLink to={`/${item.path}`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;

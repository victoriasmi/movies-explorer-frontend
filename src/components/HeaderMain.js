import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import logo from '../images/logo.svg';
import burgermenu from '../images/burger-menu.svg';
import Navigation from "./Navigation";
import App from './App/App';

export default function HeaderMain(props) {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerMenuClick() {
    setIsBurgerMenuOpen(true);
  }

  function closeAllPopups() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <div>
      <header className="header">
        <div className="header__navi">
          <Link to="/" src={logo} alt="логотип"><img className="header__logo" src={logo} alt="логотип" /></Link>
          <nav className="header__movies">
            <li><NavLink className={({ isActive }) => "header__link" + (isActive ? "_type_active" : "")} to="/movies"  >Movies</NavLink></li>
            <li><NavLink className={({ isActive }) => "header__link" + (isActive ? "_type_active" : "")} to="/saved-movies">Saved movies</NavLink></li>
          </nav>
        </div>
        <div className="header__account">
          <Link className="header__text header__text_type_nav" to="/profile">Profile</Link>
          <img className="header__burger-menu" src={burgermenu} alt="меню" onClick={handleBurgerMenuClick} />
        </div>
        <Navigation
          onClose={closeAllPopups}
          isOpen={isBurgerMenuOpen}
        />
      </header>
    </div>
  )
}

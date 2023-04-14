import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import logo from '../images/logo.svg';
import burgermenu from '../images/burger-menu.svg';
import Navigation from "./Navigation";
import App from './App/App';

export default function HeaderMain(props) {
  // const history = useHistory();

  // function handleLogOut() {
  //   localStorage.removeItem("token");
  //   history.push("/signin");
  // }

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);


  // console.log(isBurgerMenuOpen);

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
          <div className="header__movies">
            <Link className="header__link" to="/movies">Фильмы</Link>
            <Link className="header__link" to="/saved-movies">Сохраненные фильмы</Link>
          </div>
        </div>
        <div className="header__account">
          <Link className="header__text header__text_type_nav" to="/profile">Аккаунт</Link>
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

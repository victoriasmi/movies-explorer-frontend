import React from "react";
// import { useHistory } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import logo from '../images/logo.svg';
import burgermenu from '../images/burger-menu.svg';


export default function HeaderMain() {
  // const history = useHistory();

  // function handleLogOut() {
  //   localStorage.removeItem("token");
  //   history.push("/signin");
  // }

  return (
    <div>
      <header className="header">
        <div className="header__navi">
          <img className="header__logo" src={logo} alt="логотип" />
          <div className="header__movies">
            <Link className="header__link" to="/movies">Фильмы</Link>
            <Link className="header__link" to="/savedmovies">Сохраненные фильмы</Link>
          </div>
          </div>
          <div className="header__account">
            <Link className="header__text" to="/profile">Аккаунт</Link>
            <button className="header__burger-menu" src={burgermenu} alt="меню" />
          </div>
          <div className="menu">
          <Link className="menu__link" to="/">Главная</Link>
          <Link className="menu__link" to="/movies">Фильмы</Link>
          <Link className="menu__link" to="/savedmovies">Сохраненные фильмы</Link>
          <div className="header__account">
            <Link className="header__text" to="/profile">Аккаунт</Link>
          </div>
          </div>
      </header>
    </div>
  )
}

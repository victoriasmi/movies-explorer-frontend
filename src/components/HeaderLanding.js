import React from "react";
// import { useHistory } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import logo from '../images/logo.svg';


export default function HeaderLanding() {
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
          </div>
          <div className="header__auth">
            <Link className="header__register" to="/signup" target="_blank">Регистрация</Link>
            <Link className="header__login" to="/signin" target="_blank">Войти</Link>
          </div>
      </header>
    </div>
  )
}

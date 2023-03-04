import React, { useState, useEffect } from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, Route, Routes, Outlet } from "react-router-dom";

export default function Navigation(props) {

  // console.log(props.onClose); 
  console.log(props);

  return (
    // <div className={`menu menu_opened`}>
    <div className={`menu ${props.isOpen && "menu_opened"}`}>
      <div className="menu__container">
        <button className="menu__close" onClick={props.onClose}></button>
        <div className="menu__links">
          <Link className="menu__link" to="/">Главная</Link>
          <Link className="menu__link" to="/movies">Фильмы</Link>
          <Link className="menu__link" to="/saved-movies">Сохраненные фильмы</Link>
        </div>
        <div className="header__account">
          <Link className="header__text" to="/profile">Аккаунт</Link>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, NavLink, Route, Routes, Outlet } from "react-router-dom";

export default function Navigation(props) {

  return (
    // <div className={`menu menu_opened`}>
    <div className={`menu ${props.isOpen && "menu_opened"}`}>
      <div className="menu__container">
        <button className="menu__close" onClick={props.onClose}></button>
        <div className="menu__links">
          <NavLink className={({ isActive }) => "menu__link" + (isActive ? "_type_active" : "")} to="/">Main</NavLink>
          <NavLink className={({ isActive }) => "menu__link" + (isActive ? "_type_active" : "")} to="/movies">Movies</NavLink>
          <NavLink className={({ isActive }) => "menu__link" + (isActive ? "_type_active" : "")} to="/saved-movies">Saved movies</NavLink>
        </div>
        <div className="header__account">
          <Link className="header__text" to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, Route, Routes, Outlet } from "react-router-dom";

export default function NavTab(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
       <ul className="navigation">
        <Link className="navigation__link" to="about-project">О проекте</Link>
        <Link className="navigation__link" to="technologies">Технологии</Link>
        <Link className="navigation__link" to="about-me">Студент</Link>
        <Outlet/>
      </ul>
  );
}
import React from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, Route, Routes } from "react-router-dom";
import profilePic from '../../images/photo_2022-11-02_22-15-52.jpg';
import Portfolio from './Portfolio';


export default function AboutMe(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <section id="about-me">
      <div className="content__container">
        <div className="content__header">
          <h1 className="content__header-text">Студент</h1>
        </div>
        <div className="about-me__container">
        <div className="about-me__block-main">
          <h1 className="about-me__name">Виктория</h1>
          <p className="about-me__occupation">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__about">Начинающий front-end разработчик с опытом более 7 лет в продуктовом менеджменте, аналитике, маркетинге, исследованиях. Увлекаюсь дизайном.</p>
          <Link className="about-me__link" to="https://github.com/victoriasmi">Github</Link>
        </div>
        <img className="about-me__photo" src={profilePic} alt='фото-профиля' />
        </div>
      </div>
      </section>
      <Portfolio />
    </>
  );

}
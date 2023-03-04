import React from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function AboutProject(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
      <section className="content__container">
        <div className="content__header">
          <h1 className="content__header-text">О проекте</h1>
        </div>
        <div className="about-project__block-main">
          <div className="about-project__block-text">
            <h1 className="about-project__block-title">Дипломный проект включал 5 этапов</h1>
            <p className="about-project__block-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__block-text">
            <h1 className="about-project__block-title">На выполнение диплома ушло 5 недель</h1>
            <p className="about-project__block-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__block-graphics">
          <div className="about-project__graphics">
            <p className="about-project__graphics-title">1 неделя</p>
            <p className="about-project__graphics-subtitle">Back-end</p>
          </div>
          <div className="about-project__graphics-front">
            <p className="about-project__graphics-title about-project__graphics-title_type_front">4 недели</p>
            <p className="about-project__graphics-subtitle">Front-end</p>
          </div>
        </div>
      </section>
  );

}
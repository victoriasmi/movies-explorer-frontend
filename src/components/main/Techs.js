import React from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Techs(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="content__container content__container_type_grey">
      <div className="tech__container">
        <div className="content__header">
          <h1 className="content__header-text">Технологии</h1>
        </div>
        <div className="techs__block-main">
          <h1 className="techs__title">7 технологий</h1>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__block-list">
          <p className="techs__list-element">HTML</p>
          <p className="techs__list-element">CSS</p>
          <p className="techs__list-element">JS</p>
          <p className="techs__list-element">React</p>
          <p className="techs__list-element">Git</p>
          <p className="techs__list-element">Express.js</p>
          <p className="techs__list-element">mongoDB</p>
        </div>
      </div>
    </section>
  );

}
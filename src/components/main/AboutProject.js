import React from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function AboutProject(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
      <section className="content__container" ref={props.refAboutProject}>
        <div className="content__header">
          <h1 className="content__header-text">About Graduation Project</h1>
        </div>
        <div className="about-project__block-main">
          <div className="about-project__block-text">
            <h1 className="about-project__block-title">Graduation Project included 5 stages</h1>
            <p className="about-project__block-subtitle">Planning and decomposition, back-end, HTML and CSS, adding functionality with React and refactoring.</p>
          </div>
          <div className="about-project__block-text">
            <h1 className="about-project__block-title">Graduation Project was done in 5 weeks</h1>
            <p className="about-project__block-subtitle">Every stage of the project had a hard deadline which had to be met in order to graduate.</p>
          </div>
        </div>
        <div className="about-project__block-graphics">
          <div className="about-project__graphics">
            <p className="about-project__graphics-title">1 week</p>
            <p className="about-project__graphics-subtitle">Back-end</p>
          </div>
          <div className="about-project__graphics-front">
            <p className="about-project__graphics-title about-project__graphics-title_type_front">4 weeks</p>
            <p className="about-project__graphics-subtitle">Front-end</p>
          </div>
        </div>
      </section>
  );

}
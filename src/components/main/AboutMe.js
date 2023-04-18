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
    <section ref={props.refAboutMe}>
      <div className="content__container">
        <div className="content__header">
          <h1 className="content__header-text">Creator</h1>
        </div>
        <div className="about-me__container">
        <div className="about-me__block-main">
          <h1 className="about-me__name">Victoria</h1>
          <p className="about-me__occupation">Front-end developer</p>
          <p className="about-me__about">Beginner front-end developer with 7 years of experience in management, marketing, research and analytics. Interested in design.</p>
          <Link className="about-me__link" to="https://github.com/victoriasmi"  target="_blank" rel="noreferrer noopener">Github</Link>
        </div>
        <img className="about-me__photo" src={profilePic} alt='фото-профиля' />
        </div>
      </div>
      </section>
      <Portfolio />
    </>
  );

}
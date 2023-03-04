import React from 'react';
import NavTab from './NavTab';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Promo(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="promo">
    <div className="promo-banner">
      <p className="promo-banner__text">Учебный проект студента факультета Веб-разработки.</p>
      <div className="navigation">
        <NavTab />
      </div>
    </div>
    </section>
  );

}
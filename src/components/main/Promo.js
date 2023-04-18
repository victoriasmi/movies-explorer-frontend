import React from 'react';
import NavTab from './NavTab';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Promo(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="promo">
      <div className="promo-banner">
        <p className="promo-banner__text">Graduation Project. <br></br>DocuFilms: explore the best documentaries.</p>
        <div className="navigation">
          <NavTab
            refAboutMe={props.refAboutMe}
            refAboutTech={props.refAboutTech}
            refAboutProject={props.refAboutProject}
          />
        </div>
      </div>
    </section>
  );

}
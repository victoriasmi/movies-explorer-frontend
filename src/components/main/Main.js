import React from 'react';
import { Outlet } from 'react-router';
import AboutMe from './AboutMe';
import AboutProject from './AboutProject';
import Portfolio from './Portfolio';
import Promo from './Promo';
import Techs from './Techs';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Outlet/>
    </main>
  );

}



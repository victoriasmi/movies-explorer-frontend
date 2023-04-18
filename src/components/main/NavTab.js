import React from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link } from "react-router-dom";

export default function NavTab(props) {

  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  console.log(props);

  // refAboutMe={props.refAboutMe}
  // refAboutTech={props.refAboutTech}
  // refAboutProject={props.refAboutProject}

  return (
       <ul className="navigation">
        <div className="navigation__link" onClick={()=>scrollToSection(props.refAboutProject)} >About project</div>
        <div className="navigation__link" onClick={()=>scrollToSection(props.refAboutTech)} >Technologies</div>
        <div className="navigation__link" onClick={()=>scrollToSection(props.refAboutMe)} >About creator</div>
      </ul>
  );
}
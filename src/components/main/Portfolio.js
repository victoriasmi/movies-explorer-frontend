import React from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, Route, Routes } from "react-router-dom";
import arrow from '../../images/arrowPortfolio.svg';

export default function Portfolio(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="portfolio">
      {/* <div className="portfolio__wrapper"> */}
      <p className="portfolio__title">Portfolio</p>
      <ul className="portfolio__links">
        <li className="portfolio__block">
          <Link className="portfolio__block-link" to="https://github.com/victoriasmi/how-to-learn" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__link">Static website</p>
            <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
          </Link>
        </li>
        <li className="portfolio__block">
          <Link className="portfolio__block-link" to="https://github.com/victoriasmi/russian-travel" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__link">Dynamic website</p>
            <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
          </Link>
        </li>
        <li className="portfolio__block">
          <Link className="portfolio__block-link" to="https://github.com/victoriasmi/react-mesto-api-full" target="_blank" rel="noreferrer noopener">
            <p className="portfolio__link">Single-page application</p>
            <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
          </Link>
        </li>
      </ul>
      {/* </div> */}
    </section>
  );

}
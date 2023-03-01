import React from 'react';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Link, Route, Routes } from "react-router-dom";
import arrow from '../../images/arrowPortfolio.svg';

export default function Portfolio(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__block">
          <Link className="portfolio__block-link" to="https://github.com/victoriasmi" target="_blank">
            <p className="portfolio__link">Статичный сайт</p>
            <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
          </Link>
        </li>
        <li className="portfolio__block">
          <Link className="portfolio__block-link" to="https://github.com/victoriasmi" target="_blank">
            <p className="portfolio__link">Адаптивный сайт</p>
            <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
          </Link>
        </li>
        <li className="portfolio__block">
          <Link className="portfolio__block-link" to="https://github.com/victoriasmi" target="_blank">
            <p className="portfolio__link">Одностраничное приложение</p>
            <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
          </Link>
        </li>
      </ul>
    </section>
  );

}
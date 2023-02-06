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
      <div className="portfolio__links">
        <div className="portfolio__block-link">
          <Link className="portfolio__link" to="https://github.com/victoriasmi">Статичный сайт</Link>
          <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
        </div>
        <div className="portfolio__block-link">
          <Link className="portfolio__link" to="https://github.com/victoriasmi">Адаптивный сайт</Link>
          <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
        </div>
        <div className="portfolio__block-link">
          <Link className="portfolio__link" to="https://github.com/victoriasmi">Одностраничное приложение</Link>
          <img className="portfolio__arrow-button" src={arrow} alt="стрелка" />
        </div>
      </div>
    </section>
  );

}
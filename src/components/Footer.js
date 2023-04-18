import { Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
      <p className="footer__project-name">Graduation Project powered by Yandex.Practicum х BeatFilm.</p>
      </div>
      <div className="footer__bottom">
        <p className="footer__year">&copy; 2023</p>
        <div className="footer__links">
          <Link className="footer__link" to="https://practicum.yandex.ru/" target={"_blank"}>Yandex.Practicum</Link> 
          <Link className="footer__link" to="https://github.com/victoriasmi" target={"_blank"}>Github</Link>
        </div>
      </div>
    </footer>
  );
}

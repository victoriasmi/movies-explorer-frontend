import { Link, Route, Switch } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
      <p className="footer__project-name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__bottom">
        <p className="footer__year">&copy; 2023</p>
        <div className="footer__links">
          <Link className="footer__link" to="/signup">Яндекс.Практикум</Link> 
          {/* не та ссылка  */}
          <Link className="footer__link" to="/signup">Github</Link>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function MoviesCard(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [isSaved, setisSaved] = useState(false);

  const movieSaveButtonClassName = (
    `element__save-button ${isSaved ? 'element__save-button_type_active' : 'element__save-button'}`
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleSaveClick() {
    setisSaved(true);
    props.onSave(props.movie);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleDeleteClick() {
    setisSaved(false);
    props.onDelete(props.movie)
  };

  useEffect(() => {
    // окрашиваем кнопку лайка, если он фильм нашелся в сохраненных
    if (props.savedMovies.some((movie) => movie.owner === currentUser._id && movie.id === props.movie.id)) {
      setisSaved(true);
    } else setisSaved(false);
  }, [props.savedMovies, props.movie, currentUser, isSaved, handleDeleteClick, handleSaveClick]);

  function calcDuration() {
    const duration = props.movie.duration; // in min

    const hours = duration / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    const newDuration = rhours + " h " + rminutes + " мin ";
    return newDuration;
  }

  return (
    <>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">{props.movie.nameEN}</h2>
            <p className="element__duration">{calcDuration()}</p>
          </div>
          <button className={movieSaveButtonClassName} type="button" onClick={isSaved ? handleDeleteClick : handleSaveClick}></button>
        </div>
        <Link to={props.movie.trailerLink} target="_blank" rel="noreferrer noopener"><img className="element__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="постер" /></Link>
      </li>
    </>
  )
}

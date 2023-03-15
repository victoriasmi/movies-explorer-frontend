import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function MoviesCard(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [isSaved, setisSaved] = useState(false);

  useEffect(() => {
    props.savedMovies.filter(m => { if (m.id === props.movie.id && m.owner === currentUser._id) { setisSaved(true) } });
  }, []);

  function handleSaveClick() {
    console.log(isSaved);
    setisSaved(true);
    localStorage.setItem("isSaved", true);
    console.log(isSaved);
    console.log(props.movie);
    props.onSave(props.movie)
  }

  function handleDeleteClick() {
    setisSaved(false);
    localStorage.setItem("isSaved", false);
    console.log(isSaved);
    console.log(props.movie);
    props.onDelete(props.movie)
  }

  function calcDuration() {
    const duration = props.movie.duration; // in min
    // console.log(duration);
    const hours = duration / 60;
    const rhours = Math.floor(hours);
    // console.log(hours);
    // console.log(rhours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    // console.log(minutes);
    // console.log(rminutes);
    const newDuration = rhours + "ч " + rminutes + "м ";
    // console.log(newDuration);
    return newDuration;
  }

  // function toHoursAndMinutes(totalMinutes) {
  //   const hours = Math.floor(totalMinutes / 60);
  //   const minutes = totalMinutes % 60;
  
  //   return { hours, minutes };
  // }

  return (
    <>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">{props.movie.nameRU}</h2>
            <p className="element__duration">{calcDuration()}</p>
          </div>
          <button className={`element__save-button ${isSaved && "element__save-button_type_active"}`} type="button" onClick={isSaved ? handleDeleteClick : handleSaveClick}></button>
        </div>
        <Link to={props.movie.trailerLink} target="_blank" rel="noreferrer noopener"><img className="element__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="постер" /></Link>
      </li>
    </>
  )
}

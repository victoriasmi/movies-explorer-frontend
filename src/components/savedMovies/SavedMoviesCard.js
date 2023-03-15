import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function SavedMoviesCard(props) {

  const [isOwned, setIsOwned] = useState(false);

  const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.savedMovie.owner === currentUser._id;
  // console.log(isOwn);
  // setIsOwned(isOwn);

  useEffect(() => {
    const isOwn = props.savedMovie.owner === currentUser._id;
    // console.log(isOwn);
    // console.log(props.savedMovie.owner);
    // console.log(currentUser._id);
    setIsOwned(isOwn);
  }, []);

  function handleDeleteClick() {
    // console.log(props.savedMovie);
    props.onDelete(props.savedMovie);
  };

  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner === currentUser._id;

  // const isSaved = props.card.likes.some((i) => i === currentUser._id);

  function calcDuration() {
    const duration = props.savedMovie.duration;
    // console.log(duration);
    // console.log(duration/60);
    const hours = Math.floor(duration / 60);
    // console.log(hours);
    const minutes = duration - 60;
    // console.log(minutes);
    const newDuration = hours + "ч " + minutes + "м ";
    return newDuration;
  }

  return (
    <>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">{props.savedMovie.nameRU}</h2>
            <p className="element__duration">{calcDuration()}</p>
          </div>
          <button className={`element__delete-button ${isOwned && "element__delete-button_type_active"}`} type="button" onClick={handleDeleteClick}></button>
        </div>
        <Link to={props.savedMovie.trailerLink} target="_blank" rel="noreferrer noopener"><img className="element__image" src={props.savedMovie.image} alt="постер" /></Link>
      </li>
    </>
  )
}

import React, { useState, useContext } from 'react';
// import trialMovie from '../../images/pic__COLOR_pic.png';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function MoviesCard(props) {

  const [isSaved, setisSaved] = useState(false);

  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner._id === currentUser._id;
  // const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  function handleSaveClick(){
    console.log(isSaved);
    setisSaved(true);
    localStorage.setItem("isSaved", true);
    console.log(isSaved);
    console.log(props.movie);
    props.onSave(props.movie)
  }

  function handleDeleteClick(){
    setisSaved(false);
    localStorage.setItem("isSaved", false);
    console.log(isSaved);
    console.log(props.movie);
    props.onDelete(props.movie)
  }

  const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner === currentUser._id;

  // const isSaved = props.card.likes.some((i) => i === currentUser._id);

  function calcDuration(){
    const duration = props.movie.duration;
    // console.log(duration);
    // console.log(duration/60);
    const hours = Math.floor(duration/60);
    // console.log(hours);
    const minutes = duration-60;
    // console.log(minutes);
    const newDuration = hours + "ч " + minutes + "м ";
    return newDuration;
  }

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
        <img className="element__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="постер" />
      </li>
    </>
  )
}

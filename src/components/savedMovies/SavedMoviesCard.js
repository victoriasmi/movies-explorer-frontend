import React from 'react';
// import trialMovie from '../../images/pic__COLOR_pic.png';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function SavedMoviesCard(props) {
  // function handleClick() {
  //   props.onCardClick(props.card);
  // }

  // function handleLikeClick() {
  //   props.onCardLike(props.card);
  // }

  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner._id === currentUser._id;
  // const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  function handleDeleteClick(){
    console.log(props.savedMovie);
    props.onDelete(props.savedMovie);
  }

  const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner === currentUser._id;

  // const isSaved = props.card.likes.some((i) => i === currentUser._id);

  function calcDuration(){
    const duration = props.savedMovie.duration;
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
            <h2 className="element__title">{props.savedMovie.nameRU}</h2>
            <p className="element__duration">{calcDuration()}</p>
          </div>
          <button className="element__delete-button" type="button" onClick={handleDeleteClick}></button>
        </div>
        <img className="element__image" src={props.savedMovie.image} alt="постер" />
      </li>
    </>
  )
}

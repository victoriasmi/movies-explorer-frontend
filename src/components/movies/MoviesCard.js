import React from 'react';
import trialMovie from '../../images/pic__COLOR_pic.png';

export default function MoviesCard(props) {
  // function handleClick() {
  //   props.onCardClick(props.card);
  // }

  // function handleLikeClick() {
  //   props.onCardLike(props.card);
  // }

  // function handleDeleteClick() {
  //   props.onCardDelete(props.card);
  // }

  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.card.owner._id === currentUser._id;
  // const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  return (
    <>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">33 слова о дизайне</h2>
            <p className="element__duration">1ч 47м</p>
          </div>
          <button className="element__save-button" type="button"></button>
        </div>
        <img className="element__image" src={trialMovie} alt="постер" />
      </li>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">33 слова о дизайне</h2>
            <p className="element__duration">1ч 47м</p>
          </div>
          <button className="element__save-button element__save-button_type_active" type="button"></button>
        </div>
        <img className="element__image" src={trialMovie} alt="постер" />
      </li>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">33 слова о дизайне</h2>
            <p className="element__duration">1ч 47м</p>
          </div>
          <button className="element__save-button" type="button"></button>
        </div>
        <img className="element__image" src={trialMovie} alt="постер" />
      </li>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">33 слова о дизайне</h2>
            <p className="element__duration">1ч 47м</p>
          </div>
          <button className="element__save-button" type="button"></button>
        </div>
        <img className="element__image" src={trialMovie} alt="постер" />
      </li>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">33 слова о дизайне</h2>
            <p className="element__duration">1ч 47м</p>
          </div>
          <button className="element__save-button" type="button"></button>
        </div>
        <img className="element__image" src={trialMovie} alt="постер" />
      </li>
      
    </>
  )
}

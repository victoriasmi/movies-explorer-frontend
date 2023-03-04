import React from 'react';
import Movie from './Movie';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function MoviesCardList(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
      <ul className="elements">
        {props.movies.map((movie) => (
          <Movie
            key={movie._id}
            movie={movie}
            // onCardClick={props.onCardClick}
            // onCardLike={props.onCardLike}
            // onCardRemoveLike={props.onCardRemoveLike}
            // onCardDelete={props.onCardDelete}
          />
        ))
        }
      </ul>
  );
}
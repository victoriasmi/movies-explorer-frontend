import React from 'react';
import SavedMoviesCard from './SavedMoviesCard';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SavedMoviesCardList(props) {

  console.log(props.savedMovies);
  // const currentUser = React.useContext(CurrentUserContext);

  return (
      <ul className="elements elements__saved">
        {props.savedMovies.map((savedMovie) => (
          <SavedMoviesCard
            key={savedMovie._id}
            savedMovie={savedMovie}
            onDelete={props.onDelete}
          />
        ))
        }
      </ul>
  );
}
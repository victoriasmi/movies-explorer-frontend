import React from 'react';
import MovieCard from './MoviesCard';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function MoviesCardList(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
      <ul className="elements">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onSave={props.onSave}
            onDelete={props.onDelete}
          />
        ))
        }
      </ul>
  );
}
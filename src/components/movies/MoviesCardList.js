import React, { useState, useContext, useEffect } from 'react';
import MovieCard from './MoviesCard';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function MoviesCardList(props) {

  // const currentUser = React.useContext(CurrentUserContext);
  // const [isCheckSaved, setIsCheckSaved] = useState(false);

  // // const savedMovies = props.savedMovies;

  // function checkSaved() {
  //   const result = props.movies.map((movie) => (props.savedMovies.filter(m => { return m.id === movie.id })))
  //   console.log(result);
  //   if (result !== 0) {
  //     isCheckSaved(true);
  //   }
  //   console.log(isCheckSaved);
  // }

  // useEffect(() => {
  //   checkSaved();
  // }, []);

  return (
    <ul className="elements">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie._id}
          isSavedMo
          movie={movie}
          onSave={props.onSave}
          onDelete={props.onDelete}
          savedMovies={props.savedMovies}
          // isCheckSaved={isCheckSaved}
        />
      ))
      }
    </ul>
  );
}
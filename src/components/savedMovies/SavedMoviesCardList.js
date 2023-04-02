import React, { useState, useContext, useEffect } from 'react';
import SavedMoviesCard from './SavedMoviesCard';

export default function SavedMoviesCardList(props) {

  const [savedMoviesState, setSavedMoviesState] = useState([]);

  console.log(props.savedMovies);
  console.log(props.savedMoviesAfterFilters);
  console.log(props.isSavedFilterError);

  useEffect(() => {
    if (props.savedMoviesAfterFilters.length !== 0) {
      setSavedMoviesState(props.savedMoviesAfterFilters);
    } else if (props.savedMoviesAfterFilters.length === 0) {
      if (props.isSavedFilterError === true) {
        setSavedMoviesState([]);
      } else setSavedMoviesState(props.savedMovies);
    }
  }, [props.savedMoviesAfterFilters, props.isSavedFilterError]);

  useEffect(() => {
    setSavedMoviesState(props.savedMovies);
  }, [props.savedMovies]);

  return (
    <ul className="elements elements__saved">
      {savedMoviesState.map((savedMovie) => (
        <SavedMoviesCard
          key={savedMovie._id}
          owner={savedMovie.owner}
          savedMovie={savedMovie}
          onDelete={props.onDelete}
        />
      ))
      }
    </ul>
  );
}
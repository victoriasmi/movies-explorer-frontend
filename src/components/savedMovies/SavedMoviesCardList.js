import React, { useState, useContext, useEffect } from 'react';
import SavedMoviesCard from './SavedMoviesCard';

export default function SavedMoviesCardList(props) {

  const [savedMoviesState, setSavedMoviesState] = useState([]);

  useEffect(() => {
    if (props.savedMoviesAfterFilters.length !== 0) {
      setSavedMoviesState(props.savedMoviesAfterFilters);
    } else if (props.savedMoviesAfterFilters.length === 0) {
      setSavedMoviesState(props.savedMovies);
    } 
    if (props.isSavedFilterError === true) {
      setSavedMoviesState([]);
    }
  }, [props.savedMoviesAfterFilters, props.savedMovies, props.isSavedFilterError]);

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
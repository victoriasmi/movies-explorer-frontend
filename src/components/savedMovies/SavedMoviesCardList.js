import React, { useState, useContext, useEffect } from 'react';
import SavedMoviesCard from './SavedMoviesCard';

export default function SavedMoviesCardList(props) {

  const [savedMoviesState, setSavedMoviesState] = useState([]);

  useEffect(() => {
    if (!props.isSavedFilterError) {
    if (props.savedMoviesAfterFilters.length === 0) {
      setSavedMoviesState(props.savedMovies);

    } else {
        // console.log("из поиска");
        // console.log(props.savedMoviesAfterFilters);
        setSavedMoviesState(props.savedMoviesAfterFilters);
      }
    } 
    else if (props.isSavedFilterError) {
      setSavedMoviesState([]);
    }
  }, [props.savedMovies, props.savedMoviesAfterFilters, props.isSavedFilterError]);

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
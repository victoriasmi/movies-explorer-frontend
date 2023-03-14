import React, { useState, useContext, useEffect } from 'react';
import SavedMoviesCard from './SavedMoviesCard';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function SavedMoviesCardList(props) {

  console.log(props.savedMovies);
  
  // const [isOwned, setIsOwned] = useState(false);

  const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = props.savedMovie.owner === currentUser._id;
  // setIsOwned(isOwn);
  // const isOwn = props.savedMovie.owner === currentUser._id;
  // console.log(isOwn);
  // setIsOwned(isOwn);

  // useEffect(() => {
  //   props.savedMovies.filter(m => { if (m.id === props.movie.id) { setisSaved(true) } });
  // }, [])
  // const unsavedMovie = savedMovies.filter(m => { return m.id === movie.id });

  const ownedSavedMovies = () => {
    return props.savedMovies.filter(m => (m.owner = currentUser._id ));
  }

  console.log(ownedSavedMovies);
  // useEffect(() => {
  //   const isOwn = props.savedMovie.owner === currentUser._id;
  //   console.log(isOwn);
  //   setIsOwned(isOwn);
  // }, []);

  return (
      <ul className="elements elements__saved">
        {ownedSavedMovies().map((savedMovie) => (
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
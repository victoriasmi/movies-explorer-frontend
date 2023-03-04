import React from 'react';
import MovieCard from './MoviesCard';
import SearchForm from './SearchForm';
import FilterCheckbox from './FilterCheckbox';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Movies(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="movies">
      <div className="movies__finder">
        <SearchForm />
        <FilterCheckbox />
        </div>
      <section className="">
      <ul className="elements">
        {/* {props.movie.map((movie) => ( */}
        <MovieCard
        // key={movie._id}
        // movie={movie}
        // onCardClick={props.onCardClick}
        // onCardLike={props.onCardLike}
        // onCardRemoveLike={props.onCardRemoveLike}
        // onCardDelete={props.onCardDelete}
        />
      </ul>
      </section>
      <section className="loader">
        <button className="loader__load-button" type="button">Еще</button>
      </section>
    </main>
  );

}
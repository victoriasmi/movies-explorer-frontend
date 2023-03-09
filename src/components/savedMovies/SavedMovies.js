import React, { useState, useEffect } from 'react';
import SavedMoviesCardList from './SavedMoviesCardList';
import SearchForm from '../movies/SearchForm';
import FilterCheckbox from '../movies/FilterCheckbox';
// import Preloader from './Preloader';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SavedMovies(props) {

  return (
    <main className="movies">
      <div className="movies__finder">
        <SearchForm
          onFilter={props.onFilter}
        />
        <FilterCheckbox 
        />
      </div>
      {/* <section className="proloader__box">
        <Preloader />
      </section> */}
      <section className="">
        <SavedMoviesCardList
          savedMovies={props.savedMovies}
          onDelete={props.onDelete}
        />
      </section>
      <section className="loader">
        <button className="loader__load-button" type="button">Еще</button>
      </section>
    </main>
  );

}
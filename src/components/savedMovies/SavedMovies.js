import React, { useState, useEffect } from 'react';
import SavedMoviesCardList from './SavedMoviesCardList';
import SavedSearchForm from '../savedMovies/SavedSearchForm';
import SavedFilterCheckbox from '../savedMovies/SavedFilterCheckbox';
// import Preloader from './Preloader';

export default function SavedMovies(props) {

  return (
    <main className="movies">
      <div className="movies__finder">
        <SavedSearchForm
          onSavedFilter={props.onSavedFilter}
        />
        <SavedFilterCheckbox
          onSavedFilterCheckBox={props.onSavedFilterCheckBox}
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
    </main>
  );
}

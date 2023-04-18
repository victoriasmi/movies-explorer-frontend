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
          isSavedLoaded={props.isSavedLoaded}
        />
        <SavedFilterCheckbox
          onSavedFilterCheckBox={props.onSavedFilterCheckBox}
        />
      </div>
      <div className={`error__filter ${props.isSavedFilterError && "error__filter_type_active"}`}>
        <h1 className="error__filter-text">Nothing found</h1>
      </div>
      {/* <section className="proloader__box">
        <Preloader />
      </section> */}
      <section className="">
        <SavedMoviesCardList
          isSavedFilterError={props.isSavedFilterError}
          savedMovies={props.savedMovies}
          savedMoviesAfterFilters={props.savedMoviesAfterFilters}
          onSavedFilterCheckBox={props.onSavedFilterCheckBox}
          onDelete={props.onDelete}
        />
      </section>
    </main>
  );
}

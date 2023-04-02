import React, { useState, useEffect, useContext } from 'react';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';
import FilterCheckbox from './FilterCheckbox';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Preloader from './Preloader';

export default function Movies(props) {

  return (
    <main className="movies">
      <div className="movies__finder">
        <SearchForm
          onFilter={props.onFilter}
          isLoaded={props.isLoaded}
        />
        <FilterCheckbox
          onFilterCheckBox={props.onFilterCheckBox}
        />
      </div>
      <section className={`preloader__box ${!props.isLoaded && "preloader__box_type_active"}`}>
        <Preloader
        />
      </section>
      <div className={`error__filter ${props.isError && "error__filter_type_active"}`}>
        <h1 className="error__filter-text">Ничего не найдено</h1>
      </div>
      <div className={`error__filter ${props.isFetchError && "error__filter_type_active"}`}>
        <h1 className="error__filter-text">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. 
        Подождите немного и попробуйте ещё раз</h1>
      </div>
      <section className="">
        <MoviesCardList
          movies={props.movies}
          onSave={props.onSave}
          onDelete={props.onDelete}
          savedMovies={props.savedMovies}
          moviesFromStorage={props.moviesFromStorage}
          loggenIn={props.loggenIn}
        />
      </section>
    </main>
  );

}
import React, { useState, useEffect } from 'react';
import MovieCard from './MoviesCard';
const {
  bigScreenMovies, mediumScreenMovies, smallScreenMovies
} = require('../../constants');

export default function MoviesCardList(props) {

  const [moviesPerPage, setmoviesPerPage] = useState([]);
  const [moviesToCut, setMoviesToCut] = useState([]);
  const [moviesWithPagination, setMoviesWithPagination] = useState([]);
  const [isLoadButtonActive, setIsLoadButtonActive] = useState(false);


  useEffect(() => {
    if (props.movies.length !== 0) {
      setMoviesToCut(props.movies);
    }
    else if (props.movies.length === 0) {
      if (localStorage.getItem("searchQueryResult") !== null) {
        const resultFromStorage = JSON.parse(localStorage.getItem("searchQueryResult"));
        setMoviesToCut(resultFromStorage);
      }
    }
  }, [props]);

  const page = document.querySelector(".page");
  const observer = new ResizeObserver(entries => {
    const pageElement = entries[0];
    if (pageElement.contentRect.width >= 1280) {
      setmoviesPerPage(bigScreenMovies);
    } else if (pageElement.contentRect.width >= 678) {
      setmoviesPerPage(mediumScreenMovies);
    } else setmoviesPerPage(smallScreenMovies);
  });

  setTimeout(() => { observer.observe(page) }, 200)

  useEffect(() => {
    const pagination = moviesToCut.slice(0, moviesPerPage);
    setMoviesWithPagination(pagination);
    if (moviesToCut.length > moviesPerPage) {
      setIsLoadButtonActive(true);
    } else setIsLoadButtonActive(false);
  }, [moviesPerPage, moviesToCut]);

  return (
    <>
      <ul className="elements">
        {moviesWithPagination.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onSave={props.onSave}
            onDelete={props.onDelete}
            savedMovies={props.savedMovies}
            movies={props.movies}
          />
        ))
        }
      </ul>
      <div className="loader">
        <button className={`loader__load-button ${isLoadButtonActive && "loader__load-button_type_active"}`} type="button"
          onClick={
            function Pagination() {
              Array.prototype.diff = function (a) {
                return this.filter(function (i) { return a.indexOf(i) < 0; });
              };
              const newPagination = moviesToCut.diff(moviesWithPagination);
              const newPaginationSliced = newPagination.slice(0, moviesPerPage);
              setMoviesWithPagination(moviesWithPagination.concat(newPaginationSliced));
              if (newPagination.length <= moviesPerPage) {
                setIsLoadButtonActive(false);
              }
            }} >Еще</button>
      </div>
    </>
  );
}
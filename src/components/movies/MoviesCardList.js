import React, { useState, useContext, useEffect } from 'react';
import MovieCard from './MoviesCard';
const {
  bigScreenMovies, mediumScreenMovies, smallScreenMovies
} = require('../../constants');

export default function MoviesCardList(props) {

  const [moviesPerPage, setmoviesPerPage] = useState([]);
  const [moviesWithPagination, setMoviesWithPagination] = useState([]);
  const [moviesWithPaginationLength, setMoviesWithPaginationLength] = useState([]);
  const [isLoadButtonActive, setIsLoadButtonActive] = useState(false);

  // const savedMovies = props.savedMovies;
  console.log(props.movies);

  const page = document.querySelector(".page");
  // observer.observe(page);
  const observer = new ResizeObserver(entries => {
    const pageElement = entries[0];
    if (pageElement.contentRect.width >= 1280) {
      setmoviesPerPage(bigScreenMovies);
    } else if (pageElement.contentRect.width >= 678) {
      setmoviesPerPage(mediumScreenMovies);
    } else setmoviesPerPage(smallScreenMovies);
    console.log(moviesPerPage);
  });

  setTimeout(() => { observer.observe(page) }, 200)

  Array.prototype.diff = function (a) {
    return this.filter(function (i) { return a.indexOf(i) < 0; });
  };

  let pagination = [];

  // setTimeout(() => { pagination = props.movies.slice(0, moviesPerPage); }, 1000)
  // console.log(pagination);
  // // const pagination = props.movies.slice(0, moviesPerPage);

  useEffect(() => {
    pagination = props.movies.slice(0, moviesPerPage);
    setMoviesWithPagination(pagination);
    console.log(moviesWithPagination);
    setMoviesWithPaginationLength(moviesWithPagination.length);
    console.log(moviesWithPaginationLength);
  }, [props.movies]);

  console.log(moviesWithPagination);

  useEffect(() => {
    setIsLoadButtonActive((props.movies.length > moviesWithPaginationLength));
    console.log(isLoadButtonActive);
    console.log(props.movies.length);
    console.log(moviesWithPaginationLength);
  }, [setMoviesWithPagination]);

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
          />
        ))
        }
      </ul>
      <div className="loader">
        <button className={`loader__load-button ${isLoadButtonActive && "loader__load-button_type_active"}`} type="button"
          onClick={function Pagination() {
            const newPagination = props.movies.diff(moviesWithPagination);
            const newPaginationSliced = newPagination.slice(0, moviesPerPage);
            setMoviesWithPagination(moviesWithPagination.concat(newPaginationSliced));
            setMoviesWithPaginationLength(moviesWithPagination.length);
          }} >Еще</button>
      </div>
    </>
  );
}
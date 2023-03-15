import React, { useState, useContext, useEffect } from 'react';
import MovieCard from './MoviesCard';

export default function MoviesCardList(props) {

  const [moviesPerPage, setmoviesPerPage] = useState([]);

  // const savedMovies = props.savedMovies;
  console.log(props.movies);

  // function checkSaved() {
  //   const result = props.movies.map((movie) => (props.savedMovies.filter(m => { return m.id === movie.id })))
  //   console.log(result);
  //   if (result !== 0) {
  //     isCheckSaved(true);
  //   }
  //   console.log(isCheckSaved);
  // }

  // const page = document.querySelector(".page");
  // // observer.observe(page);
  // const observer = new ResizeObserver(entries => {
  //   const pageElement = entries[0];
  //   if (pageElement.contentRect.width >= 1280) {
  //     setmoviesPerPage(12);
  //   } else if (pageElement.contentRect.width >= 678) {
  //     setmoviesPerPage(8);
  //   } else setmoviesPerPage(5);
  //   console.log(moviesPerPage);
  // });

  // observer.observe(page);

  // // observer.observe(page);
  // const allMovies = props.movies.length;
  // console.log(allMovies);

  // function Pagination(){

  // }

  return (
    <>
      <ul className="elements">
        {props.movies.map((movie) => (
          <MovieCard
            key={movie._id}
            isSavedMo
            movie={movie}
            onSave={props.onSave}
            onDelete={props.onDelete}
            savedMovies={props.savedMovies}
          // isCheckSaved={isCheckSaved}
          />
        ))
        }
      </ul>
      <div className="loader">
        <button className="loader__load-button" type="button" >Еще</button>
      </div>
    </>
  );
}
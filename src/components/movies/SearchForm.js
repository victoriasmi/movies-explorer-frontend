import React, { useState, useEffect } from 'react';
// import FilterCheckbox from './FilterCheckbox';
// import MoviesCardList from './MoviesCardList';
import searchIcon from '../../images/search.svg'
// import { moviesApi } from '../../utils/MoviesApi';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SearchForm(props) {

  const [input, setInput] = useState("");

  function handleInputChange(e){
    setInput(e.target.value);
    localStorage.setItem("input", input);
  }

  function handleFilter(e) {
    e.preventDefault()
    props.onFilter(input);
  }

  // const allMovies = props.movies;
  // console.log(allMovies);
  // // const movieNames = allMovies.nameRU;
  // // console.log(movieNames);
  // console.log(movieSearch);

  // const result = allMovies.filter(movie => movie.nameRU.includes(movieSearch));
  // console.log(result);

  // function isMatch(value){
  //   return value.includes(movieSearch);
  // };
  // const foundMovies = movieNames.filter(isMatch); 

  // function isBigEnough(value) {
  //   return value >= 10;
  // }

  // let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // // массив filtered теперь содержит [12, 130, 44]

  return (
    // <section className="content">
    <div className="search">
      <form className="search-form">
        <div className="search__block-input">
          <img className="search__icon" src={searchIcon} alt="поиск"></img>
          <input className="search__input" id="movie-input" type="movie" name="movie"
            minLength="2" maxLength="30" placeholder="Фильм" value={input} onChange={handleInputChange} required />
        </div>
        {/* value={email ?? ""} onChange={handleEmailChange} required /> */}
        {/* <span className="movie-input-error error"></span> */}
        <button className="search-form__search-button" type="submit" onClick={handleFilter} ></button>
      </form>
      {/* <FilterCheckbox /> */}
      {/* <section className="">
        <MoviesCardList
        movies={result}
        /> 
      </section> */}
    </div>
    // </section>
  );

}

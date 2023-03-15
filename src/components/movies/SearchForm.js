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
  console.log(input);

  function handleFilter(e) {
    e.preventDefault()
    props.onFilter(input);
  }

  useEffect(() => {
    setInput(localStorage.getItem("input"));
  }, [])

  return (
    // <section className="content">
    <div className="search">
      <form className="search-form">
        <div className="search__block-input">
          <img className="search__icon" src={searchIcon} alt="поиск"></img>
          <input className="search__input" id="movie-input" type="movie" name="movie"
            minLength="2" maxLength="30" placeholder="Фильм" value={input ?? ""} onChange={handleInputChange} required />
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

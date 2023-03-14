import React, { useState, useEffect } from 'react';
// import FilterCheckbox from './FilterCheckbox';
// import MoviesCardList from './MoviesCardList';
import searchIcon from '../../images/search.svg'

export default function SavedSearchForm(props) {

  const [savedInput, setSavedInput] = useState("");

  function handleSavedInputChange(e){
    setSavedInput(e.target.value);
    // localStorage.setItem("savedInput", savedInput);
  }

  function handleSavedFilter(e) {
    e.preventDefault()
    props.onSavedFilter(savedInput);
  }

  return (
    // <section className="content">
    <div className="search">
      <form className="search-form">
        <div className="search__block-input">
          <img className="search__icon" src={searchIcon} alt="поиск"></img>
          <input className="search__input" id="saved-movie-input" type="saved-movie" name="saved-movie"
            minLength="2" maxLength="30" placeholder="Фильм" value={savedInput} onChange={handleSavedInputChange} required />
        </div>
        {/* value={email ?? ""} onChange={handleEmailChange} required /> */}
        {/* <span className="movie-input-error error"></span> */}
        <button className="search-form__search-button" type="submit" onClick={handleSavedFilter} ></button>
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

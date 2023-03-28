import React, { useState, useEffect } from 'react';
import searchIcon from '../../images/search.svg'

export default function SearchForm(props) {

  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
    console.log(input);
  };

  function handleFilter(e) {
    e.preventDefault()
    props.onFilter(input);
    localStorage.setItem("input", input);
  };

  useEffect(() => {
    const inputFromStorage = localStorage.getItem("input");
    setInput(inputFromStorage);
    console.log(inputFromStorage);
  }, [setInput]);

  return (
    <div className="search">
      <form className="search-form">
        <div className="search__block-input">
          <img className="search__icon" src={searchIcon} alt="поиск"></img>
          <input className="search__input" id="movie-input" type="movie" name="movie"
            minLength="2" maxLength="30" placeholder="Фильм" value={input ?? ""} onInput={handleInputChange} required />
        </div>
        <button className="search-form__search-button" type="submit" onClick={handleFilter} ></button>
      </form>
    </div>
  );
}

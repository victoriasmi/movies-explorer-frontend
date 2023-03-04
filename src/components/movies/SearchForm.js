import React from 'react';
import FilterCheckbox from './FilterCheckbox';
import searchIcon from '../../images/search.svg'
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SearchForm(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    // <section className="content">
    <div className="search">
      <form className="search-form">
        <div className="search__block-input">
          <img className="search__icon" src={searchIcon} alt="поиск"></img>
          <input className="search__input" id="movie-input" type="movie" name="movie"
            minLength="2" maxLength="30" placeholder="Фильм" required />
        </div>
        {/* value={email ?? ""} onChange={handleEmailChange} required /> */}
        {/* <span className="movie-input-error error"></span> */}
        <button className="search-form__search-button" type="submit"></button>
      </form>
      {/* <FilterCheckbox /> */}
    </div>
    // </section>
  );

}
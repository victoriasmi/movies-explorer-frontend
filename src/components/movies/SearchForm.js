import React from 'react';
import FilterCheckbox from './FilterCheckbox';
// import editAvatarPic from "../images/edit_button.svg"
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SearchForm(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    // <section className="content">
      <div className="search">
        <div className="search-form">
          <div className="search-form__container">
            <input className="search__input" id="movie-input" type="movie" name="movie"
              minLength="2" maxLength="30" placeholder="Фильм" />
            {/* //иконку добавить */}
            {/* value={email ?? ""} onChange={handleEmailChange} required /> */}
            {/* <span className="movie-input-error error"></span> */}
          <button className="search-form__search-button" type="submit"></button>
          </div>
          <FilterCheckbox />
        </div>
        </div>
    // </section>
  );

}
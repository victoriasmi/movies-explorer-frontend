import React from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function FilterCheckbox(props) {

  // const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
    <div className="filter-checkbox">
           <button className="filter-checkbox__button" type="checkbox"></button>
           <p className="filter-checkbox__title">Короткометражки</p>
     </div>
   </>
  );

}
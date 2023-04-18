import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function SavedMoviesCard(props) {

  function handleDeleteClick() {
    // console.log(props.savedMovie);
    props.onDelete(props.savedMovie);
  };


  function calcDuration() {
    const duration = props.savedMovie.duration; // in min
    const hours = duration / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    const newDuration = rhours + " h " + rminutes + " min ";
    return newDuration;
  }

  return (
    <>
      <li className="element">
        <div className="element__top">
          <div className="element__text">
            <h2 className="element__title">{props.savedMovie.nameEN}</h2>
            <p className="element__duration">{calcDuration()}</p>
          </div>
          <button className="element__delete-button element__delete-button_type_active" type="button" onClick={handleDeleteClick}></button>
        </div>
        <Link to={props.savedMovie.trailerLink} target="_blank" rel="noreferrer noopener"><img className="element__image" src={props.savedMovie.image} alt="постер" /></Link>
      </li>
    </>
  )
}

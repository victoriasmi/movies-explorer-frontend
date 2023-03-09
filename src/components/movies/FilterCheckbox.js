import React, { useState, useEffect } from 'react';

export default function FilterCheckbox(props) {

  const [isChecked, setisChecked] = useState(false);

  function handleCheckClick(){
    setisChecked(true);
    localStorage.setItem("isChecked", true);
    console.log(isChecked);
  }

  function handleCheckSndClick(){
    setisChecked(false);
    localStorage.setItem("isChecked", false);
    console.log(isChecked);
  }

  // useEffect(() => {
  //   const savedCheked = localStorage.getItem("isChecked");
  //   setisChecked(savedCheked);
  //   console.log(savedCheked);
  //   console.log(isChecked);
  // }, [])

  return (
    <>
      <div className="filter-checkbox">
        <button className={`filter-checkbox__button ${isChecked && "filter-checkbox__button_type_active"}` } type="checkbox" onClick={isChecked? handleCheckSndClick : handleCheckClick}></button>
        <p className="filter-checkbox__title">Короткометражки</p>
      </div>
    </>
  );

}
import React, { useState, useEffect } from 'react';

export default function FilterCheckbox(props) {

  const [isChecked, setisChecked] = useState(false);
  console.log(isChecked);

  // props.onFilterCheckBox(isChecked);
  useEffect(() => {
    props.onFilterCheckBox(isChecked);
  }, [isChecked])

  function handleCheckClick(){
    setisChecked(true);
    localStorage.setItem("isChecked", isChecked);
    console.log(isChecked);
  }

  function handleCheckAndClick(){
    setisChecked(false);
    localStorage.setItem("isChecked", isChecked);
    console.log(isChecked);
  }


  // useEffect(() => {
  //   props.onFilterCheckBox(isChecked);
  // }, [isChecked])


  // useEffect(() => {
  //   console.log(isChecked);
  //   console.log(props.onFilterCheckBox);
  //   // props.onFilterCheckBox(isChecked);
  //   console.log(props.onFilterCheckBox(isChecked));
  // }, [])

  return (
    <>
      <div className="filter-checkbox">
        <button className={`filter-checkbox__button ${isChecked && "filter-checkbox__button_type_active"}` } type="checkbox" onClick={isChecked? handleCheckAndClick : handleCheckClick}></button>
        <p className="filter-checkbox__title">Короткометражки</p>
      </div>
    </>
  );

}
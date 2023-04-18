import React, { useState, useEffect } from 'react';

export default function SavedFilterCheckbox(props) {

  const [isChecked, setisChecked] = useState(false);
  console.log(isChecked);

  useEffect(() => {
    props.onSavedFilterCheckBox(isChecked);
  }, [isChecked])

  function handleCheckClick(){
    setisChecked(true);
    console.log(isChecked);
  }

  function handleCheckAndClick(){
    setisChecked(false);
    console.log(isChecked);
  }

  return (
    <>
      <div className="filter-checkbox">
        <button className={`filter-checkbox__button ${isChecked && "filter-checkbox__button_type_active"}` } type="checkbox" onClick={isChecked? handleCheckAndClick : handleCheckClick}></button>
        <p className="filter-checkbox__title">Short films</p>
      </div>
    </>
  );

}
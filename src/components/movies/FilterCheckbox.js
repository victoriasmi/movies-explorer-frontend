import React, { useState, useEffect } from 'react';

export default function FilterCheckbox(props) {

  const [isChecked, setisChecked] = useState(false);

  function handleCheckClick() {
    setisChecked(!isChecked);
    localStorage.setItem("isChecked", !isChecked);
  };

  useEffect(() => {
    props.onFilterCheckBox(isChecked);
  }, [isChecked, props]);

  useEffect(() => {
    const checked = JSON.parse(localStorage.getItem("isChecked"));
    if (checked && checked === true) {
      setisChecked(true);
    } 
    else if (checked && checked === false) {
      setisChecked(false);
    };
  }, []);


  return (
    <>
      <div className="filter-checkbox">
        <button className={`filter-checkbox__button ${isChecked && "filter-checkbox__button_type_active"}`}
          type="checkbox" onClick={handleCheckClick}></button>
        <p className="filter-checkbox__title">Short films</p>
      </div>
    </>
  );

}
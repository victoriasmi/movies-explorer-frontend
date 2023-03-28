import React, { useState, useEffect, useContext } from 'react';
import iconSuccess from '../../images/successConfirmation.png';
import iconSmthSentWrong from '../../images/smthWentWrong.png';

export default function InfoTooltip({ isOpen, onClose, isSuccess, updateErr }) {

  const [errText, setErrText] = useState("");

  function checkErrText(){
    if (updateErr.includes(409)){
      setErrText("Пользователь с таким email уже существует");
    } else setErrText("Что-то пошло не так, попробуйте еще раз.");
  };

  useEffect(() => {
    checkErrText();
  }, []);

  return (
    <div className={`popup popup_type_info-tool-tip ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <form className="popup__form popup__form_type_info-tool-tip" name="name">
          <img
            className="popup__icon"
            src={isSuccess ? iconSuccess : iconSmthSentWrong }
            alt={isSuccess ? "Успех" : "Неудача" }
          />
          <p className="popup__title popup__title_type_info-tool-tip">
            {isSuccess ? "Успех!" : errText }
          </p>
        </form>
      </div>
    </div>
  )
}
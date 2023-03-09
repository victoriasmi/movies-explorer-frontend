import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();
    props.onLogin(email, password)
  }

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <img className="auth__logo" src={logo} alt="логотип" />
          <p className="auth__title ">Рады видеть!</p>
          <form className="auth__form auth__form_type_login" onSubmit={handleLogin}>
            {/* // onSubmit={handleRegister} noValidate> */}
            <p className="auth__input-title">E-mail</p>
            <input className="auth__input auth__input_type_login" id="email-input" type="email" name="email" value={email ?? ""}  onChange={handleEmailChange} 
              minLength="2" maxLength="30" required />
            {/* value={email ?? ""} onChange={handleEmailChange} /> */}
            <span className="email-input-error error"></span>
            <p className="auth__input-title">Пароль</p>
            <input className="auth__input auth__form_type_register" id="password-input" type="password" name="password" value={password ?? ""}  onChange={handlePasswordChange} required />
            {/* // value={password ?? ""} onChange={handlePasswordChange} /> */}
            <span className="password-input-error error"></span>
              <button className="auth__button auth__button_type_login" type="submit">Войти</button>
              <div className="auth__change-type">
                <p className="auth__change-type-text">Ещё не зарегистрированы?&nbsp;</p>
                <Link to="/signup" className="auth__change-type-link">Регистрация</Link>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}
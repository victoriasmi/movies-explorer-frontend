import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Register(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRegister(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  }

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          <img className="auth__logo" src={logo} alt="логотип" />
          <p className="auth__title ">Добро пожаловать!</p>
          <form className="auth__form auth__form_type_register" onSubmit={handleRegister}>
            {/* // onSubmit={handleRegister} noValidate> */}
            <p className="auth__input-title">Имя</p>
            <input className="auth__input auth__input_type_register" id="name-input" type="name" name="name" value={name ?? ""} onChange={handleNameChange}/>
            {/* // value={password ?? ""} onChange={handlePasswordChange} required /> */}
            <span className="password-input-error error"></span>
            <p className="auth__input-title">E-mail</p>
            <input className="auth__input auth__input_type_register" id="email-input" type="email" name="email"
              minLength="2" maxLength="30" value={email ?? ""}  onChange={handleEmailChange}/>
            {/* value={email ?? ""} onChange={handleEmailChange} required /> */}
            <span className="email-input-error error"></span>
            <p className="auth__input-title">Пароль</p>
            <input className="auth__input auth__form_type_register" id="password-input" type="password" name="password" value={password ?? ""}  onChange={handlePasswordChange} />
            {/* // value={password ?? ""} onChange={handlePasswordChange} required /> */}
            <span className="password-input-error error"></span>
            <button className="auth__button auth__button_type_register" type="submit">Зарегистрироваться</button>
            <div className="auth__change-type">
              <p className="auth__change-type-text">Уже зарегистрированы?&nbsp;</p>
              <Link to="/signin" className="auth__change-type-link">Войти</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );

}
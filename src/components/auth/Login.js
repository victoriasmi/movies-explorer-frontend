import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useForm } from 'react-hook-form';

export default function Login(props) {

  // const navigate = useNavigate();
  // const location = useLocation();

  const { register, handleSubmit,
    formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin(e) {
    // e.preventDefault();
    props.onLogin(email, password)
  }

  return (
    <>
      <div className="auth">
        <div className="auth__container">
          {/* <img className="auth__logo" src={logo} alt="логотип" /> */}
          <Link to="/" src={logo} className="auth__logo" alt="логотип"><img src={logo} alt="логотип" /></Link>
          <p className="auth__title ">Рады видеть!</p>
          <form className="auth__form auth__form_type_login" onSubmit={handleSubmit(handleLogin)}>
            <p className="auth__input-title">E-mail</p>
            <input className="auth__input auth__input_type_login" id="email-input" type="email" name="text" value={email ?? ""} onInput={handleEmailChange}
              {...register('email', {
                required: 'Поле не может быть пустым',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Поле email заполнено неправильно',
                },
              })}
            />
            <span className="error">{errors?.email && errors.email.message}</span>
            <p className="auth__input-title">Пароль</p>
            <input className="auth__input auth__form_type_register" id="password-input" type="password" name="password" value={password ?? ""} onInput={handlePasswordChange}
              {...register('password', {
                required: 'Поле не может быть пустым',
              })}
            />
            <span className="error">{errors?.password && errors.password.message}</span>
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
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
          <p className="auth__title ">Happy to see you!</p>
          <form className="auth__form auth__form_type_login" onSubmit={handleSubmit(handleLogin)}>
            <p className="auth__input-title">Email</p>
            <input className="auth__input auth__input_type_login" id="email-input" type="email" name="text" value={email ?? ""} onInput={handleEmailChange}
              {...register('email', {
                required: 'This field can not be empty',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please enter valid email address',
                },
              })}
            />
            <span className="error">{errors?.email && errors.email.message}</span>
            <p className="auth__input-title">Password</p>
            <input className="auth__input auth__form_type_register" id="password-input" type="password" name="password" value={password ?? ""} onInput={handlePasswordChange}
              {...register('password', {
                required: 'This field can not be empty',
              })}
            />
            <span className="error">{errors?.password && errors.password.message}</span>
            <button className="auth__button auth__button_type_login" type="submit">Log in</button>
            <div className="auth__change-type">
              <p className="auth__change-type-text">Not registered?&nbsp;</p>
              <Link to="/signup" className="auth__change-type-link">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
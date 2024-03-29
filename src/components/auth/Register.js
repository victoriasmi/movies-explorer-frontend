import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useForm } from 'react-hook-form';
import InfoTooltip from './InfoTooltip';

export default function Register(props) {

  const { register, handleSubmit,
    formState: { errors } } = useForm({
      mode: "all",
    });

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
    props.onRegister(name, email, password);
  }

  return (
    <>
      <InfoTooltip
        isOpen={props.isOpen}
        onClose={props.onClose}
        isSuccess={props.isSuccess}
        updateErr={props.updateErr}
      />
      <div className="auth">
        <div className="auth__container">
          <Link to="/" src={logo} className="auth__logo" alt="логотип"><img src={logo} alt="логотип" /></Link>
          <p className="auth__title ">Welcome!</p>
          <form className="auth__form auth__form_type_register" onSubmit={handleSubmit(handleRegister)}>
            <p className="auth__input-title">Name</p>
            <input className="auth__input auth__input_type_register" id="name-input" type="text" name="username" value={name ?? ""} onInput={handleNameChange}
              {...register('username', {
                required: 'This field can not be empty',
                minLength: {
                  value: 2,
                  message: "Please enter at least 2 characters"
                },
                maxLength: {
                  value: 10,
                  message: "Please enter up to 10 characters"
                },
                pattern: {
                  value: /^[ А-ЯA-Zh-]+$/umi,
                  message: 'Поле имя может содержить только латиницу, кириллицу, пробел или дефис',
                }
              })}
            />
            <span className="error">{errors?.username && errors.username.message}</span>
            <p className="auth__input-title">E-mail</p>
            <input className="auth__input auth__input_type_register" id="email-input" type="text" name="email" value={email ?? ""} onInput={handleEmailChange}
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
                minLength: {
                  value: 6,
                  message: "Please enter at least 6 characters"
                },
                maxLength: {
                  value: 10,
                  message: "Please enter up to 10 characters"
                },
              })}
            />
            <span className="error">{errors?.password && errors.password.message}</span>
            <button className="auth__button auth__button_type_register" type="submit">Register</button>
            <div className="auth__change-type">
              <p className="auth__change-type-text">Already registered?&nbsp;</p>
              <Link to="/signin" className="auth__change-type-link">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );

}
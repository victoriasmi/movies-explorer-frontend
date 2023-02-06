import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Profile(props) {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  // }

  // function handleLogin(e) {
  //   e.preventDefault();
  //   props.onLogin(email, password)
  // }

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виктория!</h1>
      <div className="profile__info">
        <div className="profile__info-block">
          <p className="profile__form-title">Имя</p>
          <p className="profile__form-info">Виктория</p>
        </div>
        <div className="profile__info-block">
          <p className="profile__form-title">E-mail</p>
          <p className="profile__form-info">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="profile__links">
        <Link to="/" className="profile__link">Редактировать</Link>
        <Link to="/signup" className="profile__link profile__link_type_red">Выйти из аккаунта</Link>
      </div>
    </main>
  )
}
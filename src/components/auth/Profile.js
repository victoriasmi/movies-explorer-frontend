import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile(props) {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [button, setButton] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  
  // setName(currentUser.name);
  // setEmail(currentUser.email);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLogOut(e) {
    localStorage.removeItem("token");
    // setLoggedIn(false);
  }

  function handleProfileChange(e) {
    e.preventDefault()
    setIsDisabled(false);
    setButton("Сохранить");
    // setLoggedIn(false);
  }

  function handleProfileUpdate(e) {
    e.preventDefault();
    props.onProfileUpdate({
      name: name,
      email: email,
    });
  }

  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);


  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__info" onSubmit={handleProfileUpdate}>
        <div className="profile__info-block">
          <label className="profile__form-title">Имя</label>
          <input className={`profile__form-info ${!isDisabled && "profile__form-info_type_active"}`} value={name ?? ""} type="text" minLength="2" maxLength="20" onInput={handleNameChange} disabled={isDisabled}/>
        </div>
        <div className="profile__info-block">
          <label className="profile__form-title">E-mail</label>
          <input className={`profile__form-info ${!isDisabled && "profile__form-info_type_active"}`} value={email ?? ""} type="text" minLength="2" maxLength="20" onInput={handleEmailChange} disabled={isDisabled}/>
        </div>
        <div className="profile__links">
          <button className={`profile__link ${isDisabled && "profile__link_type_active"}`} onClick={handleProfileChange}>Редактировать</button>
          <button className={`profile__link ${!isDisabled && "profile__link_type_active"}`} type="submit">Сохранить</button>
          <Link to="/" className="profile__link profile__link_type_red" onClick={handleLogOut}>Выйти из аккаунта</Link>
        </div>
      </form>
    </main>
  )
}
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';

export default function Profile(props) {

  const { register, handleSubmit,
    formState: { errors } } = useForm();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [button, setButton] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLogOut(e) {
    props.onLogout();
    // setLoggedIn(false);
  }

  function handleProfileChange(e) {
    // e.preventDefault()
    setIsDisabled(false);
    setButton("Сохранить");
    // setLoggedIn(false);
  }

  function handleProfileUpdate(e) {
    // e.preventDefault();
    props.onProfileUpdate({
      name: name,
      email: email,
    });
    if (props.isSuccess) {
      setIsDisabled(true);
    }
  }

  // const currentUser = useContext(CurrentUserContext);
  // console.log(currentUser);

  // const currentUser = useContext(CurrentUserContext);
  console.log(props.currentUser);
  
  useEffect(() => {
    setName(props.currentUser.name);
    setEmail(props.currentUser.email);
  }, [props.currentUser]);

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, {props.currentUser.name}!</h1>
      {/* <form className="profile__info" onSubmit={handleProfileUpdate}> */}
      <form className="profile__info" onSubmit={handleSubmit(handleProfileUpdate)}>
        <div className="profile__info-block">
          <label className="profile__form-title">Имя</label>
          <input className={`profile__form-info ${!isDisabled && "profile__form-info_type_active"}`} value={props.currentUser.name ?? ""} name="name" type="text" onInput={handleNameChange} disabled={isDisabled}
            {...register('name', {
              required: 'Поле не может быть пустым',
              minLength: 2,
              maxLength: 20
            })}
          />
        </div>
        <span className="error">{errors?.name && errors.name.message}</span>
        <div className="profile__info-block">
          <label className="profile__form-title">E-mail</label>
          <input className={`profile__form-info ${!isDisabled && "profile__form-info_type_active"}`} value={props.currentUser.email ?? ""} name="email" type="text" onInput={handleEmailChange} disabled={isDisabled}
            {...register('email', {
              required: 'Поле не может быть пустым',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Поле email заполнено неправильно',
              },
            })}
          />
        </div>
        <span className="error">{errors?.email && errors.email.message}</span>
        <div className="profile__links">
          <button className={`profile__link ${isDisabled && "profile__link_type_active"}`} onClick={handleProfileChange}>Редактировать</button>
          <button className={`profile__link ${!isDisabled && "profile__link_type_active"}`} type="submit">Сохранить</button>
          <Link to="/" className="profile__link profile__link_type_red" onClick={handleLogOut}>Выйти из аккаунта</Link>
        </div>
      </form>
    </main>
  )
}


import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';
import InfoTooltip from './InfoTooltip';

export default function Profile(props) {

  const { register, handleSubmit,
    formState: { errors } } = useForm();

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  console.log(currentUser.name);
  console.log(currentUser.email);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  // const [isSuccess, setIsSuccess] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
    console.log("запросили данные в профиле из current");
    console.log(name, email);
  }, [currentUser]);

  console.log(name);
  console.log(email);

  function handleProfileChange(e) {
    setIsDisabled(false);
  }

  function handleProfileUpdate(e) {
    props.onProfileUpdate({
      name: name,
      email: email,
    });
    if (!props.isOpen) {
      setIsDisabled(true);
    }
  };

  function handleLogOut(e) {
    e.preventDefault()
    props.onLogout();
  }

  return (
    <>
      <InfoTooltip
        isOpen={props.isOpen}
        onClose={props.onClose}
        isSuccess={props.isSuccess}
        updateErr={props.updateErr}
      />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        {/* <form className="profile__info" onSubmit={handleProfileUpdate}> */}
        <form className="profile__info" onSubmit={handleSubmit(handleProfileUpdate)}>
          <div className="profile__info-block">
            <label className="profile__form-title">Имя</label>
            <input className={`profile__form-info ${!isDisabled && "profile__form-info_type_active"}`} value={name} name="name" type="text" onInput={handleNameChange} disabled={isDisabled}
              {...register('name', {
                required: 'Необходимо внести изменения',
                minLength: 2,
                maxLength: 20
              })}
            />
          </div>
          <span className="error">{errors?.name && errors.name.message}</span>
          <div className="profile__info-block">
            <label className="profile__form-title">E-mail</label>
            <input className={`profile__form-info ${!isDisabled && "profile__form-info_type_active"}`} value={email ?? ""} name="email" type="text" onInput={handleEmailChange} disabled={isDisabled}
              {...register('email', {
                required: 'Необходимо внести изменения',
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
    </>
  )
}
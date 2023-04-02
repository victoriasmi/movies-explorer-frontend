import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';
import InfoTooltip from './InfoTooltip';

export default function Profile(props) {

  const currentUser = useContext(CurrentUserContext);
  // console.log(currentUser);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const { register, reset, handleSubmit,
    formState: { errors } } = useForm({
      mode: "all",
      reValidateMode: 'onChange',
      defaultValues: {
        name: currentUser.name,
        email: currentUser.email,
      }
    });

    useEffect(() => {
      reset({name:name, email:email});
    },[name, email]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleProfileUpdate(e) {
    props.onProfileUpdate({
      name: name,
      email: email,
    });
  };

  function handleLogOut(e) {
    e.preventDefault()
    props.onLogout();
  }

  const isUpdated = name !== currentUser.name || email !== currentUser.email;

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
        <form className="profile__info" onSubmit={handleSubmit(handleProfileUpdate)}>
          <div className="profile__info-block">
            <label className="profile__form-title">Имя</label>
            <input 
            className="profile__form-info profile__form-info_type_active" 
            name="name" 
            type="text" 
            disabled={props.isLoading} 
            onInput={handleNameChange}
              {...register('name', {
                required: 'Это поле не может быть пустым',
                minLength: {
                  value: 2,
                  message: "Минимум 2 символа"
                },
                maxLength: {
                  value: 20,
                  message: "Максимум 20 символов"
                },
              })}
            />
          </div>
          <span className="error">{errors?.name && <p>{errors?.name?.message || "Ошибка ввода"}</p>}</span>
          <div className="profile__info-block">
            <label className="profile__form-title">E-mail</label>
            <input 
            className="profile__form-info profile__form-info_type_active" 
            name="email" 
            type="text" 
            onInput={handleEmailChange}
            disabled={props.isLoading} 
              //  value={email ?? ""} onChange={()=> reset({ name: name })}  defaultValue={currentUser.email ?? ""}
              {...register('email', {
                required: 'Это поле не может быть пустым',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Поле email заполнено неправильно',
                },
              })}
            />
          </div>
          <span className="error">{errors?.email && <p>{errors?.name?.message || "Ошибка ввода"}</p>}</span>
          <div className="profile__links">
            <button className={`profile__link ${isUpdated && "profile__link_type_active"}`} type="submit" disabled={!isUpdated}>Редактировать</button>
            <Link to="/" className="profile__link profile__link_type_red" onClick={handleLogOut}>Выйти из аккаунта</Link>
          </div>
        </form>
      </main>
    </>
  )
}
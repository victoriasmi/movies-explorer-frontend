import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {

  return (
    <>
      <div className="error-page">
        <div className='error-page__container'>
          <h1 className="error-page__error-number">404</h1>
          <p className="error-page__error-text">Страница не найдена</p>
          <Link to="/" className="error-page__link-back">Назад</Link>
        </div>
      </div>
    </>
  )
}

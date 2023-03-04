import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
// import Dashboard from './Dashboard';
import HeaderMain from '../HeaderMain';
import HeaderLanding from '../HeaderLanding';
import Footer from '../Footer';
import ErrorPage from './ErrorPage';
import Main from '../main/Main';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Profile from '../auth/Profile';
import AboutMe from '../main/AboutMe';
import AboutProject from '../main/AboutProject';
import Techs from '../main/Techs';
import SavedMovies from '../savedMovies/SavedMovies'
// import Errors from '../Errors';
import Movies from '../movies/Movies';
// import SavedMovies from '../savedMovies/SavedMovies';
// import ProtectedRoute from './ProtectedRoute';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { api } from '../utils/api';
// import { auth } from '../utils/auth';

export default function App() {

  // useEffect(() => {
  //   setIsBurgerMenuOpen(true);
  // }, [isBurgerMenuOpen])

  return (
    <div className="page">
      <Routes>
        <Route path="/signup" element={<> <Register /> </>} />
        <Route path="/signin" element={<> <Login /> </>} />
        <Route path="/" element={<> <HeaderLanding /> <Main /> <Footer /> </>}>
          <Route path="about-project" element={<AboutProject />} />
          <Route path="technologies" element={<Techs />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="/profile" element={
          <>
            <HeaderMain
            
            />
            <Profile />
          </>} />
        <Route path="/movies" element={<> <HeaderMain /> <Movies /> <Footer /> </>} />
        <Route path="/saved-movies" element={<> <HeaderMain /> <SavedMovies /> <Footer /> </>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div >
  );
}


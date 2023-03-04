import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useHistory } from "react-router-dom";
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
import { moviesApi } from '../../utils/MoviesApi'
import { auth } from '../../utils/Auth'
// import SavedMovies from '../savedMovies/SavedMovies';
// import ProtectedRoute from './ProtectedRoute';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';
// import { api } from '../utils/api';
// import { auth } from '../utils/auth';

export default function App() {

  // useEffect(() => {
  //   setIsBurgerMenuOpen(true);
  // }, [isBurgerMenuOpen])

  // const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const history = useHistory();



  // console.log(isBurgerMenuOpen);

  // function handleBurgerMenuClick() {
  //   setIsBurgerMenuOpen(true);
  // }


  // function closeAllPopups() {
  //   setIsBurgerMenuOpen(false);
  // }

  // useEffect(() => {
  //   moviesApi.moviesApi()
  //     .then((cardsData) => {
  //       setMovies(cardsData.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [])

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authInfo(token);
    }
    // console.log(loggedIn);
  }, [])

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [loggedIn, history]);

  function authInfo(token) {
    auth.getInfo(token)
      .then((data) => {
        setEmail(data.data.email);
        setCurrentUser(data.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  function handleRegisterSubmit(email, password) {
    auth.register(email, password)
      .then((data) => {
        if (data.email) {
          setIsSuccess(true);
          history.push('/signin');
        } else {
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setEmail(email);

          authInfo(res.token);
          getMovies();
          history.push('/');
        }
        else {
          setIsSuccess(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
  }

  function getMovies() {
    moviesApi.moviesApi()
      .then((cardsData) => {
        setMovies(cardsData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            // onBurgerMenuClick={handleBurgerMenuClick}
            // onClose={closeAllPopups}
            // isOpen={isBurgerMenuOpen}
            />
            <Profile />
          </>} />
        <Route path="/movies" element={<> <HeaderMain />
          <Movies
            movies={movies}
          /> <Footer /> </>} />
        <Route path="/saved-movies" element={<> <HeaderMain /> <SavedMovies /> <Footer /> </>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div >
  );
}


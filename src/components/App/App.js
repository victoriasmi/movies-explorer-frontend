import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import HeaderMain from '../HeaderMain';
import HeaderLanding from '../HeaderLanding';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Footer from '../Footer';
import ErrorPage from './ErrorPage';
import Main from '../main/Main';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Promo from '../main/Promo';
import Profile from '../auth/Profile';
import AboutMe from '../main/AboutMe';
import AboutProject from '../main/AboutProject';
import Techs from '../main/Techs';
import SavedMovies from '../savedMovies/SavedMovies'
import RequireAuth from '../../hoc/RequireAuth';
import Movies from '../movies/Movies';
import { moviesApi } from '../../utils/MoviesApi'
import { auth } from '../../utils/Auth'
import { mainApi } from '../../utils/MainApi'
const { shortFilmDuration } = require('../../constants');

export default function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesAfterFilters, setSavedMoviesAfterFilters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);
  const [isSavedFilterError, setIsSavedFilterError] = useState(false);
  const [isCheckedSaved, setIsCheckedSaved] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [updateErr, setUpdateErr] = useState("");
  const navigate = useNavigate();

  function handleRegisterSubmit(name, email, password) {
    auth.register(name, email, password)
      .then((data) => {
        if (data.email) {
          handleLoginSubmit(email, password);
          // navigate('/movies');
        }
        // else if(!data.email) {
        //   alert(data.message);
        // }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoTooltipOpen(true);
        setIsSuccess(false);
        setUpdateErr(err);
        navigate('/signup');
      })
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then((res) => {
        // console.log(res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          // console.log("успешный логин, получили токен");
          authInfo(res.token);
          getMovies();
          getSavedMovies();
          navigate('/movies');
        }
        else if (!res.token) {
          alert(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authInfo(token);
      // console.log("запросили токен повторно");
    }
  }, [])

  function authInfo(token) {
    auth.getInfo(token)
      .then((data) => {
        // setCurrentUser(data.data);
        // console.log("запросили данные для пользователя c токеном после логина");
        localStorage.setItem("userData", JSON.stringify(data.data));
        const user = localStorage.getItem("userData");
        const userParsed = JSON.parse(user);
        setCurrentUser(userParsed);
        // setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  function handleProfileUpdate(data) {
    mainApi.editProfileInfo(data)
      .then((data) => {
        // console.log("запросили данные для пользователя после обновления");
        localStorage.setItem("userData", JSON.stringify(data.data));
        const user = localStorage.getItem("userData");
        const userParsed = JSON.parse(user);
        setCurrentUser(userParsed);
        // setLoggedIn(true);
        setIsSuccess(true);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
        setUpdateErr(err);
        setIsInfoTooltipOpen(true);
      })
  };

  function handleLogOut() {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setLoggedIn(false);
    localStorage.removeItem("userData");
    localStorage.removeItem("searchQueryResult");
    localStorage.removeItem("input");
    localStorage.removeItem("isChecked");
    localStorage.removeItem("isSaved");

    navigate("/");
  };

  function closePopup() {
    setIsInfoTooltipOpen(false);
    // navigate("/profile");
  };

  function getMovies() {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        setIsFetchError(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsLoaded(true);
        setIsFetchError(true);
      });
  };

  useEffect(() => {
    getMovies();
    // console.log("получили все фильмы из API");
  }, []);

  function handleFilterCheckbox(checked) {
    setIsChecked(checked);
  };

  function handleFilteredMovies(query) {
    setIsLoaded(false);
    // console.log("получили query из поиска");
    handleFilterCheckbox();
    const result = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
    if (isChecked) {
      const shortFilms = result.filter(movie => movie.duration <= shortFilmDuration);
      setfilteredMovies(shortFilms);
      console.log(shortFilms.length);
      localStorage.setItem("searchQueryResult", JSON.stringify(shortFilms));
      // console.log("передали отфильтрованный и чекбокс массив");
      setIsLoaded(true);
      if (shortFilms.length === 0 && isFetchError === false) {
        setIsError(true);
        console.log(isError);
      } else {
        setIsError(false);
        console.log(isError);
      }
    } else {
      localStorage.setItem("searchQueryResult", JSON.stringify(result));
      if (result.length === 0 && isFetchError === false) {
        setIsError(true);
        console.log(isError);
      } else {
        setIsError(false);
        console.log(isError);
      }
      setfilteredMovies(result);
      // console.log("передали отфильтрованный массив");
      setIsLoaded(true);
    }
  };


  function handleSaveMovieClick(movie) {
    mainApi.saveMovie(movie)
      .then((movie) => {
        // console.log(movie.data);
        setSavedMovies([movie.data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUnsaveMovie(movie) {
    const unsavedMovie = savedMovies.filter(m => { return m.id === movie.id });
    let movieToDelete = unsavedMovie.find(a => a._id);
    handleDeleteMovieClick(movieToDelete);
  }


  function getSavedMovies() {
    mainApi.getSavedMovies()
      .then((movies) => {
        // console.log(movies.data);
        const savedMoviesByUser = movies.data.filter(m => { return m.owner === currentUser._id });
        setSavedMovies(savedMoviesByUser);
        setIsSavedFilterError(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSavedMovies();
    // console.log("получили все сохраненные фильмы useEffect");
  }, [currentUser]);

  function handleDeleteMovieClick(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter(m => { return m._id !== movie._id || m.id !== movie.id }))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleSavedFilteredMovies(e) {
    // console.log(e);
    handleSavedFilterCheckbox();
    // console.log(isCheckedSaved);
    const savedFilteredMovies = savedMovies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(e.toLowerCase())
    });
    if (savedFilteredMovies.length === 0) {
      setIsSavedFilterError(true);
    } else setIsSavedFilterError(false);

    if (isCheckedSaved) {
      const savedFilteredAndChekedMovies = savedFilteredMovies.filter(movie => {
        return movie.duration <= 40;
      });
      setSavedMoviesAfterFilters(savedFilteredAndChekedMovies)
      if (savedFilteredAndChekedMovies.length === 0) {
        setIsSavedFilterError(true);
      } else setIsSavedFilterError(false);
    }
    else setSavedMoviesAfterFilters(savedFilteredMovies);
    console.log(isSavedFilterError);
  };


  function handleSavedFilterCheckbox(isChecked) {
    setIsCheckedSaved(isChecked);
    setIsSavedFilterError(false);
    console.log(isSavedFilterError);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={
            !loggedIn ?
              <Register
                onRegister={handleRegisterSubmit}
                isSuccess={isSuccess}
                isOpen={isInfoTooltipOpen}
                onClose={closePopup}
                updateErr={updateErr}
              />
              :
              <ErrorPage />
          } />
          <Route path="/signin" element={
            !loggedIn ?
              <Login
                onLogin={handleLoginSubmit}
              />
              :
              <ErrorPage />
          } />

          <Route path="/" element={
            loggedIn ?
              <> <HeaderMain /> <Main /> <Footer /> </>
              :
              <> <HeaderLanding /> <Main /> <Footer /> </>}>
            <Route index element={<Promo />} />
            <Route path="about-project" element={<AboutProject />} />
            <Route path="technologies" element={<Techs />} />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
          <Route path="/profile" element={
            <RequireAuth>
              <HeaderMain
              />
              <Profile
                onProfileUpdate={handleProfileUpdate}
                onLogout={handleLogOut}
                isSuccess={isSuccess}
                isOpen={isInfoTooltipOpen}
                loggedIn={loggedIn}
                onClose={closePopup}
                updateErr={updateErr}
              />
            </RequireAuth>
          }
          />
          <Route path="/movies" element={
            <RequireAuth >
              <HeaderMain />
              <Movies
                movies={filteredMovies}
                // movies={movies}
                // moviesFromStorage={parsedMoviesFromStorage}
                onSave={handleSaveMovieClick}
                onFilter={handleFilteredMovies}
                onDelete={handleUnsaveMovie}
                savedMovies={savedMovies}
                isLoaded={isLoaded}
                isError={isError}
                isFetchError={isFetchError}
                onFilterCheckBox={handleFilterCheckbox}
                loggedIn={loggedIn}
              /> <Footer />
            </RequireAuth>} />
          <Route path="/saved-movies" element={
            <RequireAuth currentUser={currentUser}>
              <HeaderMain />
              <SavedMovies
                savedMovies={savedMovies}
                savedMoviesAfterFilters={savedMoviesAfterFilters}
                onDelete={handleDeleteMovieClick}
                onSavedFilter={handleSavedFilteredMovies}
                onSavedFilterCheckBox={handleSavedFilterCheckbox}
                isSavedFilterError={isSavedFilterError}
              /> <Footer /> </RequireAuth>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}


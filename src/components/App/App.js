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
import { render } from '@testing-library/react';
const { shortFilmDuration } = require('../../constants');

export default function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesAfterFilters, setSavedMoviesAfterFilters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuerySaved, setSearchQuerySaved] = useState("");
  const [isCheckedSaved, setIsCheckedSaved] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [updateErr, setUpdateErr] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  function handleRegisterSubmit(name, email, password) {
    auth.register(name, email, password)
      .then((data) => {
        if (data.email) {
          // setLoggedIn(true);
          navigate('/signin');
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLoginSubmit(email, password) {
    auth.authorize(email, password)
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          // console.log("успешный логин, получили токен");
          authInfo(res.token);
          getMovies();
          getSavedMovies();
          navigate('/movies');
        }
        else {
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
      console.log("запросили токен повторно");
    }
  }, [])

  function authInfo(token) {
    auth.getInfo(token)
      .then((data) => {
        setCurrentUser(data.data);
        // console.log("запросили данные для пользователя токеном после логина");
        // console.log(data.data);
        // console.log(currentUser);
        localStorage.setItem("userData", data.data);
        // console.log(localStorage.getItem("userData"));
        // setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    mainApi.getProfileInfo()
      .then((userData) => {
        setCurrentUser(userData.data);
        setLoggedIn(true);
        console.log("запросили getprofileinfo с токеном в локалсторадж");
        localStorage.setItem("userData", userData.data);
        // console.log(localStorage.getItem("userData"));
        // console.log(userData.data);
        // console.log(currentUser);
        render();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleProfileUpdate(data) {
    mainApi.editProfileInfo(data)
      .then((data) => {
        // console.log("запросили данные после обновления профиля");
        setCurrentUser(data.data);
        // console.log(data.data);
        setLoggedIn(true);
        setIsSuccess(true);
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        // console.log(err);
        setIsSuccess(false);
        setUpdateErr(err);
        setIsInfoTooltipOpen(true);
      })
  };

  function closePopup() {
    setIsInfoTooltipOpen(false);
    navigate("/profile");
    window.location.reload();
  };

  // useEffect(() => {
  //   navigate("/profile");
  // }, [isInfoTooltipOpen]);

  function handleLogOut() {
    localStorage.removeItem("token");
    setCurrentUser(null);
    // console.log(currentUser);
    setLoggedIn(false);
    localStorage.removeItem("userData");
    localStorage.removeItem("searchQueryResult");
    localStorage.removeItem("input");
    navigate("/");
  };

  function getMovies() {
    moviesApi.getMovies()
      .then((movies) => {
        // isLoaded(false);
        setMovies(movies);
        // setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, [])

  function handleSaveMovieClick(movie) {
    mainApi.saveMovie(movie)
      .then((movie) => {
        // console.log(movie.data)
        setSavedMovies([movie.data, ...savedMovies]);
        // console.log(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSavedMovies() {
    mainApi.getSavedMovies()
      .then((movies) => {
        // setFilterSavedMovies(false);
        setSavedMovies(movies.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getSavedMovies();
  }, [])

  function handleDeleteMovieClick(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter(m => { return m._id !== movie._id || m.id !== movie.id }))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleUnsaveMovie(movie) {
    const unsavedMovie = savedMovies.filter(m => { return m.id === movie.id });
    let movieToDelete = unsavedMovie.find(a => a._id);
    // console.log(movieToDelete._id);
    handleDeleteMovieClick(movieToDelete);
  }

  function handleFilterCheckbox(checked) {
    setIsChecked(checked)
    console.log(isChecked);
    if (isChecked) {
      const shortFilms = movies.filter(movie => movie.duration <= shortFilmDuration)
      // const shortFilmsSaved = savedMovies.filter(movie => movie.duration <= 40)
      // console.log(shortFilms);
      setMovies(shortFilms);
      // setSavedMovies(shortFilmsSaved);
    }
  }

  function handleFilteredMovies(e) {
    console.log(e);
    setIsLoaded(false);
    handleFilterCheckbox();
    const result = movies.filter(movie => movie.nameRU.toLowerCase().includes(e.toLowerCase()));
    // console.log(result);
    localStorage.setItem("searchQueryResult", JSON.stringify(result));
    // const resultFromStorage = localStorage.getItem("searchQueryResult")
    // console.log(resultFromStorage);
    setfilteredMovies(result);
    setIsLoaded(true);
    if (result.length === 0) {
      setIsError(true);
    } else setIsError(false);
  }

  // useEffect(() => {
  //   handleFilterCheckbox();
  //   // console.log(savedMoviesAfterFilters);
  // }, []);

  useEffect(() => {
    handleFilteredMovies();
    // console.log(savedMoviesAfterFilters);
  }, []);

  useEffect(() => {
    const resultFromStorage = localStorage.getItem("searchQueryResult");
    const parsedResultFronStorage = JSON.parse(resultFromStorage);
    console.log(parsedResultFronStorage);
    setfilteredMovies(parsedResultFronStorage);
  }, []);

  const handleSavedFilteredMovies = (e) => {
    // console.log(e);
    setSearchQuerySaved(e);
    // console.log(searchQuerySaved);
  }

  useEffect(() => {
    handleSavedFilterCheckbox();
    // console.log(savedMoviesAfterFilters);
  }, []);

  function handleSavedFilterCheckbox(isChecked) {
    console.log(isChecked);
    setIsCheckedSaved(isChecked);
    const savedFilteredMovies = savedMovies.filter(movie => {
      // console.log(searchQuerySaved);
      return movie.nameRU.toLowerCase().includes(searchQuerySaved.toLowerCase())
    });
    // console.log(savedFilteredMovies);

    const savedFilteredAndChekedMovies = savedFilteredMovies.filter(movie => {
      return movie.duration <= 40;
    });
    // console.log(savedFilteredAndChekedMovies);
    if (isCheckedSaved) {
      setSavedMoviesAfterFilters(savedFilteredAndChekedMovies)
    }
    else setSavedMoviesAfterFilters(savedFilteredMovies);
    // console.log(savedFilteredMovies);
    // console.log(savedMoviesAfterFilters);
    // console.log(savedFilteredAndChekedMovies);
  };

  useEffect(() => {
    // console.log(isCheckedSaved);
    handleSavedFilterCheckbox();
    // console.log(savedMoviesAfterFilters);
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/signup" element={
            <Register
              onRegister={handleRegisterSubmit}
            />} />
          <Route path="/signin" element={
            <Login
              onLogin={handleLoginSubmit}
            />} />

          <Route path="/" element={
            loggedIn ?
              <> <HeaderMain /> <Main /> <Footer /> </>
              :
              <> <HeaderLanding /> <Main /> <Footer /> </>}>
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
                onSave={handleSaveMovieClick}
                onFilter={handleFilteredMovies}
                onDelete={handleUnsaveMovie}
                savedMovies={savedMovies}
                isLoaded={isLoaded}
                isError={isError}
                onFilterCheckBox={handleFilterCheckbox}
              /> <Footer />
            </RequireAuth>} />
          <Route path="/saved-movies" element={
            <RequireAuth currentUser={currentUser}>
              <HeaderMain />
              <SavedMovies
                savedMovies={savedMoviesAfterFilters}
                onDelete={handleDeleteMovieClick}
                onSavedFilter={handleSavedFilteredMovies}
                onSavedFilterCheckBox={handleSavedFilterCheckbox}
              /> <Footer /> </RequireAuth>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}

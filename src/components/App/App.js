import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import Dashboard from './Dashboard';
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

// import Errors from '../Errors';
import Movies from '../movies/Movies';
import { moviesApi } from '../../utils/MoviesApi'
import { auth } from '../../utils/Auth'
import { mainApi } from '../../utils/MainApi'
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
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  // const [shortFilms, setShortFilms] = useState([]);
  // const [shortFilmsSaved, setShortFilmsSaved] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredMovies, setfilteredMovies] = useState([]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authInfo(token);
    }
  }, [])

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate("/movies");
  //   }
  // }, [loggedIn, navigate]);

  function authInfo(token) {
    auth.getInfo(token)
      .then((data) => {
        setEmail(data.data.email);
        setName(data.data.name);
        setCurrentUser(data.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleRegisterSubmit(name, email, password) {
    auth.register(name, email, password)
      .then((data) => {
        if (data.email) {
          setLoggedIn(true);
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
          console.log(res.token);
          setEmail(email);
          authInfo(res.token);
          getMovies();
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
    mainApi.getProfileInfo()
      .then((userData) => {
        setCurrentUser(userData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn])

  function handleProfileUpdate(data) {
    mainApi.editProfileInfo(data)
      .then((data) => {
        setEmail(data.email);
        setName(data.name);
        setCurrentUser(data.data);
        setIsSuccess(true);
        // window.location.reload();
        // navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setLoggedIn(false);
    navigate("/");
  }

  function getMovies() {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
        console.log(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleSaveMovieClick(movie) {
    mainApi.saveMovie(movie)
      .then((movie) => {
        console.log(movie.data)
        setSavedMovies([movie.data, ...savedMovies]);
        console.log(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
    console.log(movieToDelete._id);
    handleDeleteMovieClick(movieToDelete);
  }

  function handleFilteredMovies(e) {
    console.log(e);
    setIsLoaded(false);
    handleFilterCheckbox();
    const result = movies.filter(movie => movie.nameRU.includes(e));
    console.log(result);
    if (result.length === 0) {
      setIsError(true);
    } else setIsError(false);
    setfilteredMovies(result);
    setIsLoaded(true);
  }

  // const isChecked = false;

  function handleFilterCheckbox(isChecked) {
    console.log(isChecked);
    if (isChecked) {
      const shortFilms = movies.filter(movie => movie.duration <= 40)
      const shortFilmsSaved = savedMovies.filter(movie => movie.duration <= 40)
      console.log(shortFilms);
      setMovies(shortFilms);
      setSavedMovies(shortFilmsSaved);
    }
  }

  useEffect(() => {
    handleFilterCheckbox();
  }, [])

  // function handleFilteredSavedMovies(e) {
  //   console.log(e);
  //   const result = savedMovies.filter(movie => movie.nameRU.includes(e));
  //   console.log(result);
  //   setfilteredMovies(result);
  // }

  useEffect(() => {
    moviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn])

  //   useEffect(() => {
  //     getMovies();
  //   }, [loggedIn])

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
            !loggedIn ?
              <> <HeaderLanding /> <Main /> <Footer /> </>
              :
              <> <HeaderMain /> <Main /> <Footer /> </>}>
            <Route path="about-project" element={<AboutProject />} />
            <Route path="technologies" element={<Techs />} />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
          <Route path="/profile" element={
            <RequireAuth currentUser={currentUser}>
              <HeaderMain
              />
              <Profile
                onProfileUpdate={handleProfileUpdate}
                onLogout={handleLogOut}
                isSuccess={isSuccess}
              />
            </RequireAuth>} />
          <Route path="/movies" element={ 
          <RequireAuth currentUser={currentUser}>
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
              savedMovies={savedMovies}
              onDelete={handleDeleteMovieClick}
              onFilterCheckBox={handleFilterCheckbox}
            // onFilter={handleFilteredSavedMovies}
            /> <Footer /> </RequireAuth>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div >
  );
}

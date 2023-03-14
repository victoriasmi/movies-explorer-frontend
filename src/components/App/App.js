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
  const [currentUser, setCurrentUser] = useState([]);
  const [movies, setMovies] = useState([]);
  // const [moviesPerPage, setMoviesPerPage] = useState[1]
  const [filteredMovies, setfilteredMovies] = useState([]);
  // const [filterSavedMovies, setFilterSavedMovies] = useState(false);
  // // const [savedFilteredMovies, setSavedFilteredMovies] = useState([]);
  // const [shortFilms, setShortFilms] = useState([]);
  // const [shortFilmsSaved, setShortFilmsSaved] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesAfterFilters, setSavedMoviesAfterFilters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuerySaved, setSearchQuerySaved] = useState("");
  const [isCheckedSaved, setIsCheckedSaved] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [updateErr, setUpdateErr] = useState({});
  const navigate = useNavigate();

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
          // console.log(res.token);
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
    const token = localStorage.getItem("token");
    if (token) {
      authInfo(token);
    }
  }, [])

  function authInfo(token) {
    auth.getInfo(token)
      .then((data) => {
        // setCurrentUser(data.data);
        // console.log(data.data);
        // localStorage.setItem("userData", data.data);
        // console.log(localStorage.getItem("userData"));
        setLoggedIn(true);
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
        // localStorage.setItem("userData", userData.data);
        console.log(userData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleProfileUpdate(data) {
    mainApi.editProfileInfo(data)
      .then((data) => {
        setCurrentUser(data.data);
        console.log(data.data);
        setLoggedIn(true);
        setIsSuccess(true);
        alert("успех");
        // window.location.reload();
        // navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        // setUpdateErr(err);
        alert(err);
      })
  };

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigate("/movies");
  //   }
  // }, [loggedIn, navigate]);

  function handleLogOut() {
    localStorage.removeItem("token");
    setCurrentUser(null);
    setLoggedIn(false);
    localStorage.removeItem("userData");
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
  }, [loggedIn])

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
    console.log(movieToDelete._id);
    handleDeleteMovieClick(movieToDelete);
  }

  function handleFilteredMovies(e) {
    console.log(e);
    setIsLoaded(false);
    handleFilterCheckbox();
    const result = movies.filter(movie => movie.nameRU.toLowerCase().includes(e.toLowerCase()));
    console.log(result);
    if (result.length === 0) {
      setIsError(true);
    } else setIsError(false);
    setfilteredMovies(result);
    setIsLoaded(true);
  }

  const handleSavedFilteredMovies = (e) => {

    console.log(e);
    setSearchQuerySaved(e);
    // setFilterSavedMovies(true);
    console.log(searchQuerySaved);
    // setSavedFilteredMovies(savedResult);
    // console.log(savedFilteredMovies);
    // setFilterSavedMovies(false);
  }

  // const savedFilteredCheckedMovies = () => {

  //   // if (isCheckedSaved) {
  //   //   console.log(isCheckedSaved);
  //   //   return savedMovies.filter(movie => movie.duration <= 40);
  //   // }
  //   // else return savedMovies;
  // };

  // console.log(savedFilteredCheckedMovies());

  // useEffect(() => {
  //   savedFilteredMovies();
  // }, [])

  const savedFilteredMovies = savedMovies.filter(movie => {
    return movie.nameRU.toLowerCase().includes(searchQuerySaved.toLowerCase())
  });
  console.log(savedFilteredMovies);

  const savedFilteredAndChekedMovies = savedFilteredMovies.filter(movie => {
    return movie.duration <= 40;
  });
  console.log(savedFilteredAndChekedMovies);

  function handleFilterCheckbox(isChecked) {
    console.log(isChecked);
    if (isChecked) {
      const shortFilms = movies.filter(movie => movie.duration <= 40)
      // const shortFilmsSaved = savedMovies.filter(movie => movie.duration <= 40)
      console.log(shortFilms);
      setMovies(shortFilms);
      // setSavedMovies(shortFilmsSaved);
    }
  }

  function handleSavedFilterCheckbox(isChecked) {
    console.log(isChecked);
    setIsCheckedSaved(isChecked);
    // if (isChecked) {
    //   const shortFilmsSaved = savedFilteredMovies.filter(movie => movie.duration <= 40);
    //   setSavedMoviesAfterFilters(shortFilmsSaved);
    //   console.log(shortFilmsSaved);
    //   console.log(savedMoviesAfterFilters);
    // } 
    // else setSavedMoviesAfterFilters(savedFilteredMovies);
  };

  // useEffect(() => {
  //   handleSavedFilterCheckbox();
  // }, [isCheckedSaved]);

  // function setSavedMoviesForShow() {
  //   isCheckedSaved ? setSavedMoviesAfterFilters(savedFilteredMovies) : setSavedMoviesAfterFilters(savedFilteredAndChekedMovies);
  // }

  useEffect(() => {
    handleSavedFilterCheckbox();
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
                currentUser={currentUser}
                onProfileUpdate={handleProfileUpdate}
                onLogout={handleLogOut}
                isSuccess={isSuccess}
                loggedIn={loggedIn}
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
                savedMovies={!isCheckedSaved ? savedFilteredMovies : savedFilteredAndChekedMovies}
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

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
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
          <Route path="/profile" element={<> <HeaderMain /> <Profile /> </>} />
          <Route path="/movies" element={<> <HeaderMain/> <Movies/> <Footer/> </>} />
          <Route path="/saved-movies" element={<> <HeaderMain/> <SavedMovies/> <Footer/> </>} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div >
  );
}







// return (
//   <div className="page">
//     {/* <CurrentUserContext.Provider value={currentUser}> */}
//       <Routes>
//         <Route path="/signup" element={<Header />} />

//         {/* <Route path="/signin" >
//           <Header
//             // email={email}
//           />
//           <Login
//             // onLogin={handleLoginSubmit}
//             // isOpen={isInfoTooltipOpen}
//             // isSuccess={isSuccess}
//             // onClose={closeAllPopups}
//           />
//           <Footer />
//         </Route>

//         <Route path="/" >
//           <Header
//             // email={email}
//           />
//           <Main
//             // onEditAvatar={handleEditAvatarClick}
//             // onAddPlace={handleAddPlaceClick}
//           />
//           {/* <ProtectedRoute path="/" loggedIn={loggedIn} component={Footer} /> */}
//         {/* </Route>

//         <Route path="/movies" >
//           <Header
//             // email={email}
//           />
//           <Movies
//             // onEditAvatar={handleEditAvatarClick}
//           />
//           {/* <ProtectedRoute path="/" loggedIn={loggedIn} component={Footer} /> */}
//         {/* </Route>

//         <Route path="/saved-movies" >
//           <Header
//             // email={email}
//           />
//           <SavedMovies
//             // onEditAvatar={handleEditAvatarClick}
//             // onAddPlace={handleAddPlaceClick}
//           />
//           {/* <ProtectedRoute path="/" loggedIn={loggedIn} component={Footer} /> */}
//         {/* </Route>  */}

//         {/* <Route path="/profile" >
//           <Header
//             // email={email}
//           />
//           <Profile
//             // onEditAvatar={handleEditAvatarClick}
//           />
//           {/* <ProtectedRoute path="/" loggedIn={loggedIn} component={Footer} /> */}
//         {/* </Route>   */}
//       </Routes>
//     {/* </CurrentUserContext.Provider> */}
//   </div >
// );





// export default function App() {
  // const [currentUser, setCurrentUser] = useState([]);
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  // const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState({});
  // const [cards, setCards] = useState([]);
  // const [email, setEmail] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [isSuccess, setIsSuccess] = useState(false);
  // const history = useHistory();

  // useEffect(() => {
  //   api.getProfileInfo()
  //     .then((userData) => {
  //       setCurrentUser(userData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }

  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }

  // function closeAllPopups() {
  //   setIsEditAvatarPopupOpen(false);
  //   setIsEditProfilePopupOpen(false);
  //   setIsAddPlacePopupOpen(false);
  //   setIsInfoTooltipOpen(false);
  //   setSelectedCard({});
  // }

  // function handleCardClick(selectedCard) {
  //   setSelectedCard(selectedCard);
  // }

  // function handleUpdateUser(input) {
  //   api.editProfileInfo(input)
  //     .then((data) => {
  //       setCurrentUser(data);
  //       closeAllPopups();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // function handleUpdateAvatar(avatar) {
  //   api.editAvatar(avatar)
  //     .then((userData) => {
  //       setCurrentUser(userData);
  //       closeAllPopups();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // useEffect(() => {
  //   api.getInitialCards()
  //     .then((cardsData) => {
  //       setCards(cardsData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [])

  // function handleCardLike(card) {
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);

  //   api.changeLikeCard(card._id, !isLiked).then((newCard) => {
  //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  //   })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // function handleCardDelete(card) {
  //   api.deleteCard(card._id).then(() => {
  //     setCards((state) => state.filter(c => { return c._id !== card._id }))
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   });
  // }

  // function handleAddPlaceSubmit(input) {
  //   api.createCard(input)
  //     .then((newCard) => {
  //       setCards([newCard, ...cards]);
  //       closeAllPopups();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // function handleRegisterSubmit(email, password) {
  //   auth.register(email, password)
  //     .then(() => {
  //       setIsSuccess(true);
  //       setIsInfoTooltipOpen(true);
  //       history.push('/signin');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsSuccess(false);
  //       setIsInfoTooltipOpen(true);
  //     })
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     authInfo(token);
  //   }
  // }, [])

  // useEffect(() => {
  //   if (loggedIn) {
  //     history.push("/");
  //   }
  // }, [loggedIn]);

  // function authInfo(token) {
  //   auth.getInfo(token)
  //     .then((data) => {
  //       setEmail(data.data.email);
  //       setLoggedIn(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // function handleLoginSubmit(email, password) {
  //   auth.authorize(email, password)
  //     .then((res) => {
  //       if (res.token) {
  //         setEmail(email);
  //         setLoggedIn(true);
  //         localStorage.setItem("token", res.token);
  //         history.push('/');
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsSuccess(false);
  //       setIsInfoTooltipOpen(true);
  //     })
  // 
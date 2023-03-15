import React, { useState, useEffect, useContext } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

const RequireAuth = ({ children}) => {
  const location = useLocation();
  // const currentUser = React.useContext.CurrentUserContext;
  const user = localStorage.getItem("token");
  // const currentUser = useContext(CurrentUserContext);
  // console.log(user);
  // console.log(currentUser);
  if(!user){
    // console.log(currentUser);
    return <Navigate to="/"  state={{ from: location }}/>
  }
  // console.log(currentUser);
  // console.log(children);
  return children;
};

export default RequireAuth;
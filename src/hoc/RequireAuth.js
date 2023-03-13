import React, { useState, useEffect, useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

const RequireAuth = ({ children, currentUser }) => {
  // const currentUser = React.useContext.CurrentUserContext;
  if(!currentUser){
    // console.log(currentUser);
    return <Navigate to="/" />
  }
  // console.log(currentUser);
  // console.log(children);
  return children;
};

export default RequireAuth;
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

const ProtectedRoute = ({ isLoggedIn, children, ...props }) => {
  <Route {...props}> {isLoggedIn ? children : <Redirect to="/login" />}</Route>;
};

export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute
 *
 * Props:
 *  - isSignedIn: boolean que indica si el usuario está logueado
 *  - children: el componente que queremos proteger
 */
const ProtectedRoute = ({ isSignedIn, children }) => {
  // Si el usuario no está logueado, lo redirige al login
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  // Si está logueado, renderiza el componente protegido
  return children;
};

export default ProtectedRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute2 = ({ isCodeValid }) => {
  if (!isCodeValid()) return <Navigate to="/start" replace />;
  return <Outlet />;
};

export default ProtectedRoute2;

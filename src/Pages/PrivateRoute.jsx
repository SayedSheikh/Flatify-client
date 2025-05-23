import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
        <span className="loading loading-bars w-[50px] text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={pathname} to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;

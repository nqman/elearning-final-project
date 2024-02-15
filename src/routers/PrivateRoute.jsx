import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();

  if (!currentUser) {
    // User chưa đăng nhập => Điều hướng về trang đăng nhập
    const url = `/login?from=${location.pathname}`;
    return <Navigate to={url} replace />;
  }

  return children || <Outlet />;
}

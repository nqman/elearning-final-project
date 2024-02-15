import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AdminRoute({ children }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const location = useLocation();

  if (!currentUser) {
    // User chưa đăng nhập => Điều hướng về trang đăng nhập
    const url = `/login?from=${location.pathname}`;
    return <Navigate to={url} replace />;
  }

  if (currentUser.maLoaiNguoiDung !== "HV") {
    return <Navigate to="*" />;
  }
  return children || <Outlet />;
}

import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";
import { setIsLoading } from "../../redux/slices/loadingSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";

export default function MainLayout() {
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

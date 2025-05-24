import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import Loading from "../Components/Loading/Loading";

const MainLayout = () => {
  const [theme, setTheme] = useState(null); // Set initial as null
  const navigation = useNavigation();

  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme") || "light";
    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Don't render until theme is loaded
  if (!theme) return null;

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <main className="min-h-[calc(100vh-65px)]">
        {navigation.state === "loading" ? (
          <Loading></Loading>
        ) : (
          <Outlet></Outlet>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

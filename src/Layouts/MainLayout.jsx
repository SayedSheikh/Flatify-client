import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  const [theme, setTheme] = useState(null); // Set initial as null

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
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <main className="min-h-[calc(100vh-65px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

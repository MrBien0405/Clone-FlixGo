import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Contents/Content";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomePage;

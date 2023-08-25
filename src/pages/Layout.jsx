import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

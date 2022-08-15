import React from "react";
import "./style.css";
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

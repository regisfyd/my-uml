import { useState } from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import Navbar from "./frame/Navbar.jsx";
import Body from "./frame/body.jsx";
import Contactus from "./frame/Contact-us.jsx";
import Footer from "./frame/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;

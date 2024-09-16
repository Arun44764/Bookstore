import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Banner />
      <Freebook />
      <Footer />
      
    </>
  );
}

export default Home;

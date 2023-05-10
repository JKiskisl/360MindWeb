import React from "react";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";

import Product from "./components/product/Product";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Pricing from "./components/pricing/Pricing";

import Whyus from "./components/whyus/Whyus";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />

      <Product />

      <Whyus />
      <Pricing />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeButton, setActiveButton] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      sections.forEach((section) => {
        const bounding = section.getBoundingClientRect();

        if (bounding.top - 200 <= 0 && bounding.bottom - 200 >= 0) {
          const id = section.getAttribute("id");
          setActiveButton(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li className={activeButton === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={activeButton === "about" ? "active" : ""}>
          <a href="#about">About us</a>
        </li>
        <li className={activeButton === "product" ? "active" : ""}>
          <a href="#experience">Product</a>
        </li>
        <li className={activeButton === "whyus" ? "active" : ""}>
          <a href="#portfolio">Why us</a>
        </li>
        <li className={activeButton === "pricing" ? "active" : ""}>
          <a href="#contact">Pricing</a>
        </li>
        <li className={activeButton === "team" ? "active" : ""}>
          <a href="#team">Team</a>
        </li>
        <li className={activeButton === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

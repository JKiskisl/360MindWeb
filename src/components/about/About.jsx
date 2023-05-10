/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./about.css";
import US from "../../assets/360mind logo.png";

import { BiAward } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={US} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Users</h5>
              <small>worldwide</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            omnis incidunt molestiae corrupti tempore a enim odit! Quasi dolorum
            nobis repudiandae enim expedita, fugiat blanditiis magnam placeat
            dicta corrupti facere?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

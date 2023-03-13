import React from 'react'
import Navbar from './Navbar'
import html from "../images/html.png";
import css from "../images/css-3.png";
import git from "../images/github.png"
import merge from "../images/merge.png"
import js from "../images/js.png"
import php from "../images/php.png"
import python from "../images/python.png"
import c from "../images/c-.png"
import error from "../images/warning.png"
import { Link } from "react-router-dom";
import LandingMain from './LandingMain';
import IntroEr from './IntroEr';
import IntroWeb from './IntroWeb';
const Landing0 = () => {
  return (
    <div className="landing0">
      <Navbar />
      <div className="content">
        <small>Welcome to our</small>
        <h1>
          Online <br /> Code Editors
        </h1>
        <Link to="landmain">
          <button>Get Started</button>
        </Link>
      </div>
      <div className="icons">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={git} alt="" />
        <img src={merge} alt="" />
        <img src={js} alt="" />
        <img src={php} alt="" />
        <img src={python} alt="" />
        <img src={c} alt="" />
        <img src={error} alt="" />
      </div>
    </div>
  );
}

export default Landing0

import React from 'react'
// import {BrowserRouter as Router, Link, Route,  Routes } from 'react-router-dom';
// import Webpage from './Webpage';

const IntroOut = () => {
  return (
    // <Router>
      <div className="out" id="outweb">
        <div className="outimg">
          <img
            className="outgif"
            src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
          />
        </div>
        <div className="outcont">
          <h1 className="hcont">Code Editors </h1>
          <h1 className="hcont2">for Software Developers</h1>
          <button className="outcomp">Get your Output</button>
          {/* <Link to='/webpage'>
            
          {/* </Link> */}
        </div>
      </div>
      
  );
}

export default IntroOut
import React from 'react'
import IntroOut from './IntroOut';
import IntroWeb from './IntroWeb';
import Landing from "./Landing";
import Landing1 from './Landing1'
import Navbar from './Navbar';

const LandingMain = () => {
  return (
    <div>
      <div className="PAGE">
        <Navbar />
        <div className="pageone">
          <Landing1 />
          <Landing />
        </div>
      </div>
      <IntroOut />
      <IntroWeb />
    </div>
  );
}

export default LandingMain
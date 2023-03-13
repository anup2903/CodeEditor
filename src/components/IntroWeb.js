import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
const IntroWeb = () => {
  return (
    <>
      <div className='INTRO'>
        {/* <Navbar /> */}
        <div className="intro" id="webint">
          <div className="leftintro">
            <h1 className="textint">
              Improve your front-end coding skills by building exciting projects
            </h1>
            <h2 className="subtext">
              Write your HTML , CSS and JS code and get your desired responsive
              website
            </h2>
            <button className="webclick">
              <Link to="/webpage">Check Your Webpage</Link>
            </button>
          </div>
          <div className="rightintro">
            <img
              className="resimg"
              src="https://evyom.com/wp-content/uploads/2020/05/5aab239aeaf861b629f3eac134d6bf74.gif"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroWeb
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing0 from './components/Landing0';
import LandingMain from './components/LandingMain';
import IntroWeb from './components/IntroWeb';
import IntroOut from './components/IntroOut';
import IntroEr from './components/IntroEr';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Webpage from './components/Webpage';

function App() {
  return (
    <>
      <Router>
        <div className="website">
          {/* <Navbar /> */}
          <Landing0 />
          {/* <LandingMain /> */}
        </div>
        {/* <IntroEr/> */}
        {/* <IntroWeb /> */}
        {/* <IntroOut /> */}

        <Routes>
        <Route path="/">
          <Route index element={<Landing0 />} />
          <Route path="intro" element={<IntroWeb />} />
          <Route path="sidelog" element={<Login />} />
          <Route path="webpage" element={<Webpage />} />
        </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

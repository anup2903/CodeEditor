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
          <Route path="/intro" element={<IntroWeb />}></Route>
          <Route path="/land0" element={<Landing0 />}></Route>
          <Route path="/sidelog" element={<Login />}></Route>
          <Route path="/webpage" element={<Webpage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

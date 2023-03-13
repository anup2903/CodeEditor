import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  
  
  <nav className="navbar">
    <div className="nav">
      <div className="coleft">
        <h1 className="code"><Link to="/" style={{textDecoration: 'inherit',color:"white"}}>Codepiler</Link></h1>
      </div>
      <div className="coright">
        <div className="home sinav">
          <h2><Link to="/" style={{textDecoration: 'inherit',color:"white"}}>Home</Link></h2>
        </div>
        <div className="About sinav">
          <h2>About</h2>
        </div>
        <div className="Projects sinav">
          <h2 className="project">Projects</h2>
        </div>
        <div className="Login sinav">
          <h2>
            <Link className="login"  style={{textDecoration: 'inherit',color:"white"}}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  </nav>
);




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
    <Nav setIsOpen={setIsOpen}/>
    </>
  );
}
export default Navbar
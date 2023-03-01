import React ,{useState} from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <div className="nav">
      <div className="coleft">
        <h1 className="code"><Link to="/land0" style={{textDecoration: 'inherit',color:"white"}}>Codepiler</Link></h1>
      </div>
      <div className="coright">
        <div className="home sinav">
          <h2><Link to="/land0">Home</Link></h2>
        </div>
        <div className="About sinav">
          <h2>About</h2>
        </div>
        <div className="Projects sinav">
          <h2 className="project">Projects</h2>
        </div>
        <div className="Login sinav">
          <h2>
            <Link className="login" to="/sidelog">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  </nav>
);
const Overlay = ({ isOpen, setIsOpen }) => (
  <div
    onClick={() => setIsOpen(false)}
    className={`overlay ${isOpen ? "open" : ""}`}
  />
);

const Modal =({isOpen}) =>{
  <div className={`modal ${isOpen ? "open" : ""}`}>
    <h2>i am side modal</h2>
    <p>lets do this</p>
  </div>;
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Nav setIsOpen={setIsOpen}/>
    <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    <Modal isOpen={isOpen} />
    </>
  );
}
export default Navbar
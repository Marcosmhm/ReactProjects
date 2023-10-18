import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { handleLogOut, handleClickScroll } from "../utils";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from 'firebase/auth'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="menu">
              <h2 className="nav-logo">Rent Wheels</h2>
              <button className="menu-button" onClick={handleMenuOpen}>
                <GiHamburgerMenu />
              </button>
            </div>
            <ul className={isMenuOpen ? "open" : "closed"}>
              <li className="home" onClick={(e) => handleClickScroll(e)}>
                Home
              </li>
              <li className="why" onClick={(e) => handleClickScroll(e)}>
                Why Choose us
              </li>
              <li className="about" onClick={(e) => handleClickScroll(e)}>
                About us
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/singup">Sing Up</Link>
              </li>
              {authUser
              ? <li onClick={handleLogOut}>Log Out</li> 
              : null}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

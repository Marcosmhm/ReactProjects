import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { handleLogOut, handleClickScroll } from "../utils";
import { auth } from "../firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import LoginSingup from "./LoginSingup";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

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

  function handleLoginClick() {
    document.body.style.overflow = "hidden";
    handleMenuOpen()
    return setIsFormOpen(true);
  }

  function handleCloseForm() {
    document.body.style.overflow = "unset";
    setIsFormOpen(false);
  }

  const handleNavClick = (e) => {
    handleClickScroll(e)
    handleMenuOpen()
  }

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
            <ul className={isMenuOpen ? "open growDown" : "closed"}>
              <li onClick={(e) => handleNavClick('home')}>
                Home
              </li>
              <li onClick={(e) => handleNavClick('why')}>
                Why Choose us
              </li>
              <li onClick={(e) => handleNavClick('fleet')}>
                Inventory
              </li>
              <li onClick={(e) => handleNavClick('about')}>
                About us
              </li>
              {authUser 
              ? (
                <li onClick={handleLogOut} className="login-btn">Log Out</li>
              ) : (
                <li onClick={handleLoginClick} className="login-btn"> Login</li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {isFormOpen && <LoginSingup onClose={handleCloseForm} />}
    </>
  );
}

export default Navbar;

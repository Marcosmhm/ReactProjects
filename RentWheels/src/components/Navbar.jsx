import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { handleClickScroll } from "../utils";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleNavClick = (e) => {
    handleClickScroll(e);
    handleMenuOpen();
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
            <ul className={isMenuOpen ? "open growDown" : "closed"}>
              <li onClick={(e) => handleNavClick("home")}>Home</li>
              <li onClick={(e) => handleNavClick("why")}>Why Choose us</li>
              <li onClick={(e) => handleNavClick("fleet")}>Inventory</li>
              <li onClick={(e) => handleNavClick("about")}>About us</li>
              <li onClick={(e) => handleNavClick("testimonial-section")}>Testimonials</li>
            </ul>
            <ul className={isMenuOpen ? "open growDown" : "closed"} >
              <li className="login-btn">Sign In</li>
              <li className="register-btn">Register</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;

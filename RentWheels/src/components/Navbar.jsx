import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <li>Home</li>
              <li>Contact</li>
              <li>About us</li>
              <li>Why Choose us</li>
              <li>Login</li>
              <li className="nav-sing-up">Sing Up</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
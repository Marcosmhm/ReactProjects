import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickScroll = (e) => {
    console.log(e.target.classList.value);
    const element = document.getElementById(e.target.classList.value);
    const offset = -80;  // Adjust this value to control the offset after scrolling

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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

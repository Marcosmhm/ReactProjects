import About from "../pages/About";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import WhyUs from "../pages/WhyUs";
import Navbar from "./Navbar";

function Layout() {
  return ( 
    <>
      <Navbar />
      <Home />
      <Inventory />
      <WhyUs />
      <About />
    </>
   );
}

export default Layout;
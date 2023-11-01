import About from "../pages/About";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import Testimonials from "../pages/Testimonials";
import WhyUs from "../pages/WhyUs";
import Navbar from "./Navbar";

function Layout() {
  return ( 
    <>
      <Navbar />
      <Home />
      <WhyUs />
      <Inventory />
      <Testimonials />
      <About />
    </>
   );
}

export default Layout;
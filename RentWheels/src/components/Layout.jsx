import About from "./About";
import Home from "../pages/Home";
import Inventory from "./Inventory";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import Faq from "./Faq";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return ( 
    <>
      <Navbar />
      <Home />
      <WhyUs />
      <Inventory />
      <Testimonials />
      <Faq />
      <Footer />
      {/* <About /> */}
    </>
   );
}

export default Layout;
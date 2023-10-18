import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Inventory from "./pages/Inventory"
import WhyUs from "./pages/WhyUs"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Inventory />
      <WhyUs />
      <About />
    </>
  )
}

export default App

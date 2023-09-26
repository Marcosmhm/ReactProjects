import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home, { loader as homeLoader } from "./pages/Home"
import Movies from "./pages/Movies"


import "./assets/css/app.css"



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element="Specific movie goes here" />
      <Route path="/shows" element="Shows goes here" />
      <Route path="/show/id" element="Specific show goes here" />
      <Route path="*" element="404" />
    </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
